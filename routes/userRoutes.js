import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://mohamadalhajr:vt8GD4ZefcYvJdjD@cluster0.llroq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});


const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  release: { type: Date, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  publisher: { type: String, required: true },
  developer: { type: String, required: true },
});

const Game = mongoose.model('Game', gameSchema);


app.get('/games', async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Abrufen der Spiele', error });
  }
});

app.post('/games', async (req, res) => {
  const { title, release, genre, price, publisher, developer } = req.body;

  const newGame = new Game({
    title,
    release,
    genre,
    price,
    publisher,
    developer,
  });

  try {
    const savedGame = await newGame.save();
    res.status(201).json(savedGame);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Hinzufügen des Spiels', error });
  }
});


app.put('/games/:id', async (req, res) => {
  const { id } = req.params;
  const { title, release, genre, price, publisher, developer } = req.body;

  try {
    const updatedGame = await Game.findByIdAndUpdate(
      id,
      { title, release, genre, price, publisher, developer },
      { new: true } // Rückgabe des aktualisierten Dokuments
    );

    if (!updatedGame) {
      return res.status(404).json({ message: 'Spiel nicht gefunden' });
    }

    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Aktualisieren des Spiels', error });
  }
});

app.delete('/games/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedGame = await Game.findByIdAndDelete(id);

    if (!deletedGame) {
      return res.status(404).json({ message: 'Spiel nicht gefunden' });
    }

    res.status(200).json({ message: 'Spiel erfolgreich gelöscht' });
  } catch (error) {
    res.status(500).json({ message: 'Fehler beim Löschen des Spiels', error });
  }
});


app.listen(3000, () => {
  console.log('Server läuft auf Port 3000');
});
