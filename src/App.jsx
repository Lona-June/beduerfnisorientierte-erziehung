import './App.css';
import { useState } from "react";
// Import von TinderCard wird nicht mehr benötigt


function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>Stark. Sanft. Bedürfnisorientiert.</h1>
      <p>Ein Ort zum Nachdenken, Stärken und Staunen.</p>
      <button onClick={onStart}>Los geht's</button>
    </div>
  );
}

function Quiz() {
  const questions = [
    {
      text: "Kinder müssen auch mal alleine klarkommen – Mythos oder nicht?",
      correct: "Mythos",
      explanation: "Kinder brauchen in schwierigen Momenten Unterstützung – nicht Alleinlassen.",
    },
    {
      text: "Grenzen sind wichtig – auch in der bedürfnisorientierten Erziehung – Mythos oder nicht?",
      correct: "Kein Mythos",
      explanation: "Liebevoll gesetzte Grenzen geben Kindern Sicherheit.",
    },
    {
      text: "Kinder manipulieren Erwachsene absichtlich – Mythos oder nicht?",
      correct: "Mythos",
      explanation: "Kinder handeln aus einem Bedürfnis heraus, nicht aus Berechnung.",
    },
    {
      text: "Wenn ich mein Kind immer tröste, wird es verweichlicht – Mythos oder nicht?",
      correct: "Mythos",
      explanation: "Trost stärkt die emotionale Resilienz – nicht Schwäche.",
    },
    {
      text: "Wutanfälle sind ein Zeichen schlechter Erziehung – Mythos oder nicht?",
      correct: "Mythos",
      explanation: "Wut ist eine normale Emotion, Kinder brauchen Begleitung dabei.",
    },
    {
      text: "Eltern dürfen auch mal Nein sagen – Mythos oder nicht?",
      correct: "Kein Mythos",
      explanation: "Auch Eltern haben Bedürfnisse. Nein sagen gehört dazu.",
    },
    {
      text: "Kinder testen Grenzen nur, um zu provozieren – Mythos oder nicht?",
      correct: "Mythos",
      explanation: "Grenzen testen ist ein natürlicher Teil von Entwicklung.",
    },
    {
      text: "Strafen helfen Kindern, richtig zu handeln – Mythos oder nicht?",
      correct: "Mythos",
      explanation: "Strafen unterbrechen die Verbindung – Einsicht entsteht aus Beziehung.",
    },
    {
      text: "Bedürfnisorientierung heißt, dass alles erlaubt ist – Mythos oder nicht?",
      correct: "Mythos",
      explanation: "Bedürfnisorientierung heißt auch klare, liebevolle Führung.",
    },
    {
      text: "Konsequenz ist wichtiger als Strafe – Mythos oder nicht?",
      correct: "Kein Mythos",
      explanation: "Konsequentes, liebevolles Verhalten vermittelt Orientierung.",
    },
    {
      text: "Kinder brauchen Kontrolle, um sich sicher zu fühlen – Mythos oder nicht?",
      correct: "Mythos",
      explanation: "Verlässliche Beziehung und Orientierung geben Sicherheit, nicht Kontrolle.",
    },
    {
      text: "Wenn ein Kind weint, manipuliert es – Mythos oder nicht?",
      correct: "Mythos",
      explanation: "Weinen ist Kommunikation, keine Manipulation."
    }
  ];

  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const current = questions[index];

  const handleAnswer = (answer) => {
    const correct = current.correct === answer;
    setFeedback({ correct, explanation: current.explanation });

    setTimeout(() => {
      setFeedback(null);
      setIndex((prev) => (prev + 1) % questions.length);
    }, 2000);
  };

  return (
    <div className="tool-section fade-in">
      <h2>🧠 Mythos oder Nicht?</h2>
      <p className="tool-description">
        👋 Komm mit auf eine kleine Gedankenreise: Was denken wir über Kinder – und was ist wirklich wahr?
        Klicke auf den passenden Button und finde es heraus.
      </p>

      {/* Zeigt die Karte nur an, wenn kein Feedback angezeigt wird */}
      {current && !feedback ? (
        <div className="card">
          <p>{current.text}</p>
          <div className="quiz-buttons">
            <button onClick={() => handleAnswer("Kein Mythos")} className="quiz-button mythos">
              👈 Kein Mythos
            </button>
            <button onClick={() => handleAnswer("Mythos")} className="quiz-button kein-mythos">
              Mythos 👉
            </button>
          </div>
        </div>
      ) : (
        // Wenn Feedback da ist ODER das Quiz fertig ist, wird hier etwas anderes angezeigt
        current === undefined && !feedback ? (
            <p>Quiz beendet! Du hast alle Fragen durchgearbeitet.</p>
        ) : null
      )}

      {/* Feedback wird angezeigt, wenn `feedback` nicht null ist */}
      {feedback && (
        <p className={feedback.correct ? "feedback-correct" : "feedback-wrong"}>
          {feedback.correct ? "✅ Richtig!" : "❌ Falsch"} – {feedback.explanation}
        </p>
      )}
    </div>
  );
}

function Toolbox() {
  const tools = [
    { title: "Aktives Zuhören", description: "Wiederhole mit eigenen Worten, was dein Kind sagt." },
    { title: "Co-Regulation", description: "Bleib ruhig und präsent bei starken Gefühlen." },
    { title: "Ich-Botschaften", description: "Sag z. B.: 'Ich brauche kurz Ruhe.' statt Vorwürfen." },
    { title: "Rituale im Alltag", description: "Kleine Wiederholungen wie Einschlafspruch geben Halt." },
    { title: "Spiegeln statt schimpfen", description: "Du wolltest das alleine machen und warst frustriert – hab ich das richtig verstanden?" },
    { title: "Warten statt reagieren", description: "Ein tiefer Atemzug, bevor du sprichst – du gewinnst Abstand." },
    { title: "Realistische Erwartungen", description: "Ein Dreijähriger kann keine rationale Diskussion führen – das ist okay." },
    { title: "Verbindung vor Lösung", description: "Ich bin bei dir – das hilft oft mehr als sofort Lösungen anzubieten." },
    { title: "Weniger ist mehr", description: "Ein Blick, ein Nicken, ein Arm reichen manchmal völlig." },
    { title: "Symbolspiel nutzen", description: "Mit Kuscheltieren Konflikte nachspielen hilft beim Verarbeiten." },
    { title: "Körpersprache bewusst einsetzen", description: "Geh in die Hocke, sprich ruhig – das zeigt: Du bist da." },
    { title: "Ankündigungen geben Sicherheit", description: "Statt zu überrumpeln: 'In 5 Minuten gehen wir.' gibt Orientierung." },
    { title: "Gefühle benennen hilft beim Verstehen", description: "'Du bist traurig, weil ...' – Worte geben Halt." }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="tool-section fade-in">
      <h2>🧰 Toolbox</h2>
      <p className="tool-description">
        🎒 Hier findest du konkrete Impulse und Methoden für deinen Alltag – kleine Dinge mit großer Wirkung.
        Klappe eine Karte auf und lass dich inspirieren.
      </p>
      {tools.map((tool, index) => (
        <div key={index} className="tool-card" onClick={() => toggle(index)}>
          <strong>{tool.title}</strong>
          {openIndex === index && <p>{tool.description}</p>}
        </div>
      ))}
    </div>
  );
}

function Pinnwand() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim() !== "") {
      setNotes([...notes, input]);
      setInput("");
    }
  };

  const deleteNote = (index) => {
    const updated = [...notes];
    updated.splice(index, 1);
    setNotes(updated);
  };

  return (
    <div className="tool-section fade-in">
      <h2>📌 Pinnwand</h2>
      <p className="tool-description">
        💬 Manchmal hilft es, Gedanken einfach festzuhalten.
        Schreib auf, was dir gerade durch den Kopf geht – ohne Bewertung, nur für dich.
      </p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Gedanke eingeben..."
        className="note-input"
      />
      <button onClick={addNote} className="note-button">Hinzufügen</button>
      <div className="note-container">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <span>{note}</span>
            <button onClick={() => deleteNote(index)} className="note-delete">×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Reflexion() {
  const [entries, setEntries] = useState({
    gratefulFor: "",
    proudOf: "",
    momentOfConnection: "",
    todayMood: "neutral",
    selfCare: "",
    repair: "",
    newInsight: "",
    tomorrowIntent: "",
    miniJoy: ""
  });

  const handleChange = (key, value) => {
    setEntries({ ...entries, [key]: value });
  };

  return (
    <div className="tool-section fade-in">
      <h2>🪞 Dankbarkeit & Reflexion</h2>
      <p className="tool-description">
        🌙 Am Ende des Tages lohnt sich ein Moment der Achtsamkeit:
        Was war heute schön? Wo hast du dir selbst etwas Gutes getan?
        Nutze diesen Raum für dich – ganz ohne Druck.
      </p>

      {[{ key: "gratefulFor", label: "💛 Wofür bist du heute dankbar?" },
        { key: "proudOf", label: "🌱 Worauf bist du heute stolz?" },
        { key: "momentOfConnection", label: "👶 Ein Moment echter Verbindung?" },
        { key: "selfCare", label: "🌿 Wie hast du für dich gesorgt?" },
        { key: "repair", label: "🤝 Hast du einen Konflikt repariert?" },
        { key: "newInsight", label: "🧠 Was hast du über dich selbst gelernt?" },
        { key: "tomorrowIntent", label: "📚 Was möchtest du dir für morgen vornehmen?" },
        { key: "miniJoy", label: "🌈 Was hat dich zum Lächeln gebracht?" }
      ].map((item, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <p><strong>{item.label}</strong></p>
          <textarea
            value={entries[item.key]}
            onChange={(e) => handleChange(item.key, e.target.value)}
            rows={2}
            style={{ width: "100%", padding: "0.5rem" }}
            placeholder="Deine Antwort..."
          />
        </div>
      ))}

      <div style={{ marginBottom: "1rem" }}>
        <p><strong>🧠 Wie fühlst du dich gerade?</strong></p>
        <div style={{ fontSize: "1.5rem" }}>
          {["😞", "😐", "🙂", "😊", "🤩"].map((emoji) => (
            <button
              key={emoji}
              onClick={() => handleChange("todayMood", emoji)}
              style={{
                background: "transparent",
                border: entries.todayMood === emoji ? "2px solid #333" : "1px solid #ccc",
                borderRadius: "8px",
                padding: "0.3rem 0.6rem",
                marginRight: "0.5rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [activeTool, setActiveTool] = useState("quiz");

  if (showStartScreen) {
    return <StartScreen onStart={() => setShowStartScreen(false)} />;
  }

  return (
    <div className="split-layout">
      <div className="main-content">
        <div className="app-container">
          <h1>Stark durch Sanftheit</h1>
          <div className="nav-buttons">
            <button onClick={() => setActiveTool("quiz")}>🧠 Quiz</button>
            <button onClick={() => setActiveTool("toolbox")}>🧰 Toolbox</button>
            <button onClick={() => setActiveTool("pinnwand")}>📌 Pinnwand</button>
            <button onClick={() => setActiveTool("reflexion")}>🪞 Reflexion</button>
          </div>
          {activeTool === "quiz" && <Quiz />}
          {activeTool === "toolbox" && <Toolbox />}
          {activeTool === "pinnwand" && <Pinnwand />}
          {activeTool === "reflexion" && <Reflexion />}
        </div>
      </div>
      <div className="side-image">
        <img
          src="https://www.kindpng.com/picc/m/667-6676965_transparent-child-vector-png-mutter-kind-beziehung-clipart.png"
          alt="Inspiration"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}