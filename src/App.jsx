import { useState, useEffect } from 'react'
import MapComponent from './Map.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

function App() {

  const data = [
    {
      "Building ID": 1,
      "Building Name": "Wilkins Building",
      "Trivia ID": 1,
      "Trivia Question": "What architectural style is the Wilkins Building primarily known for?",
      "Trivia Option 1": "Gothic Revival",
      "Trivia Option 2": "Baroque",
      "Trivia Option 3": "Art Deco",
      "Trivia Answer": "Neo-Grecian"
    },
    {
      "Building ID": 1,
      "Building Name": "Wilkins Building",
      "Trivia ID": 2,
      "Trivia Question": "What year was the construction of the Wilkins Building completed?",
      "Trivia Option 1": 1826,
      "Trivia Option 2": 1847,
      "Trivia Option 3": 1854,
      "Trivia Answer": 1830
    },
    {
      "Building ID": 1,
      "Building Name": "Wilkins Building",
      "Trivia ID": 3,
      "Trivia Question": "Which iconic feature is associated with the Wilkins Building?",
      "Trivia Option 1": "Gothic-style windows",
      "Trivia Option 2": "A glass dome",
      "Trivia Option 3": "Asymmetrical courtyard",
      "Trivia Answer": "A grand Corinthian portico"
    },
    {
      "Building ID": 2,
      "Building Name": "Roberts Building",
      "Trivia ID": 4,
      "Trivia Question": "Who is the Roberts Building likely named after?",
      "Trivia Option 1": "A famous writer",
      "Trivia Option 2": "A famous architect",
      "Trivia Option 3": "A philanthropic donor",
      "Trivia Answer": "A pioneering engineer or scientist"
    },
    {
      "Building ID": 2,
      "Building Name": "Roberts Building",
      "Trivia ID": 5,
      "Trivia Question": "Which of the following is a key feature of the Roberts Building?",
      "Trivia Option 1": "A rooftop garden",
      "Trivia Option 2": "A dedicated library for historical texts",
      "Trivia Option 3": "A performance arts auditorium",
      "Trivia Answer": "State-of-the-art engineering labs"
    },
    {
      "Building ID": 2,
      "Building Name": "Roberts Building",
      "Trivia ID": 6,
      "Trivia Question": "The design of the Roberts Building reflects which of the following architectural styles?",
      "Trivia Option 1": "Brutalist architecture",
      "Trivia Option 2": "Neoclassical architecture",
      "Trivia Option 3": "Victorian Gothic architecture",
      "Trivia Answer": "Modernist architecture"
    },
    {
      "Building ID": 3,
      "Building Name": "Cruciform Building",
      "Trivia ID": 7,
      "Trivia Question": "What does the \"Cruciform\" in Cruciform Building likely refer to?",
      "Trivia Option 1": "Its role in teaching medieval history",
      "Trivia Option 2": "Its association with religious studies",
      "Trivia Option 3": "Its original use as a hospital",
      "Trivia Answer": "Its architectural shape resembling a cross"
    },
    {
      "Building ID": 3,
      "Building Name": "Cruciform Building",
      "Trivia ID": 8,
      "Trivia Question": "Who was the architect behind the design of the Cruciform Building?",
      "Trivia Option 1": "Sir Charles Barry",
      "Trivia Option 2": "Christopher Wren",
      "Trivia Option 3": "Alfred Roberts",
      "Trivia Answer": "Alfred Waterhouse"
    },
    {
      "Building ID": 3,
      "Building Name": "Cruciform Building",
      "Trivia ID": 9,
      "Trivia Question": "What was the original purpose of the Cruciform Building at UCL?",
      "Trivia Option 1": "Lecture hall",
      "Trivia Option 2": "Medical school",
      "Trivia Option 3": "Library",
      "Trivia Answer": "Hospital"
    },
    {
      "Building ID": 4,
      "Building Name": "Chadwick Building",
      "Trivia ID": 10,
      "Trivia Question": "The Chadwick Building plays a role in which of UCL’s key research areas?",
      "Trivia Option 1": "Life sciences",
      "Trivia Option 2": "Built environment",
      "Trivia Option 3": "Digital humanities",
      "Trivia Answer": "UCL Civil, Environmental & Geomatic Engineering"
    },
    {
      "Building ID": 4,
      "Building Name": "Chadwick Building",
      "Trivia ID": 11,
      "Trivia Question": "The Chadwick Building is named after which famous figure?",
      "Trivia Option 1": "Matthew Chadwick",
      "Trivia Option 2": "Charles Chadwick",
      "Trivia Option 3": "William Chadwick",
      "Trivia Answer": "Edwin Chadwick"
    },
    {
      "Building ID": 4,
      "Building Name": "Chadwick Building",
      "Trivia ID": 12,
      "Trivia Question": "What feature is part of the Chadwick Building's architectural design?",
      "Trivia Option 1": "A flying buttress",
      "Trivia Option 2": "A cornice",
      "Trivia Option 3": "A spire",
      "Trivia Answer": "A glass dome"
    },
    {
      "Building ID": 5,
      "Building Name": "Bartlett School",
      "Trivia ID": 13,
      "Trivia Question": "What is the Bartlett School at UCL primarily known for?",
      "Trivia Option 1": "Law",
      "Trivia Option 2": "Medicine",
      "Trivia Option 3": "Business",
      "Trivia Answer": "Architecture and Planning"
    },
    {
      "Building ID": 5,
      "Building Name": "Bartlett School",
      "Trivia ID": 14,
      "Trivia Question": "The Bartlett School's name honors which UCL benefactor?",
      "Trivia Option 1": "Sir Thomas Bartlett",
      "Trivia Option 2": "Alfred Bartlett",
      "Trivia Option 3": "John Bartlett",
      "Trivia Answer": "Sir Herbert Bartlett"
    },
    {
      "Building ID": 5,
      "Building Name": "Bartlett School",
      "Trivia ID": 15,
      "Trivia Question": "Which feature is a hallmark of the Bartlett School's teaching spaces?",
      "Trivia Option 1": "Anatomy dissection rooms",
      "Trivia Option 2": "Performance stages",
      "Trivia Option 3": "Large lecture theaters",
      "Trivia Answer": "Digital prototyping labs"
    },
    {
      "Building ID": 6,
      "Building Name": "Main Library",
      "Trivia ID": 16,
      "Trivia Question": "When was UCL's Main Library officially opened?",
      "Trivia Option 1": 1826,
      "Trivia Option 2": 1901,
      "Trivia Option 3": 1850,
      "Trivia Answer": 1911
    },
    {
      "Building ID": 6,
      "Building Name": "Main Library",
      "Trivia ID": 17,
      "Trivia Question": "What type of collections is the Main Library especially known for?",
      "Trivia Option 1": "Mathematical research",
      "Trivia Option 2": "Modern engineering papers",
      "Trivia Option 3": "Sports history documents",
      "Trivia Answer": "Humanities and special collections"
    },
    {
      "Building ID": 6,
      "Building Name": "Main Library",
      "Trivia ID": 18,
      "Trivia Question": "The Main Library is located in which iconic part of UCL's campus?",
      "Trivia Option 1": "South Quad",
      "Trivia Option 2": "Cruciform Building",
      "Trivia Option 3": "Science Library",
      "Trivia Answer": "Wilkins Building"
    },
    {
      "Building ID": 7,
      "Building Name": "Science Library",
      "Trivia ID": 19,
      "Trivia Question": "What is the primary focus of the Science Library at UCL?",
      "Trivia Option 1": "Humanities",
      "Trivia Option 2": "Fine Arts",
      "Trivia Option 3": "Law",
      "Trivia Answer": "STEM subjects"
    },
    {
      "Building ID": 7,
      "Building Name": "Science Library",
      "Trivia ID": 20,
      "Trivia Question": "The Science Library is particularly known for which special facility?",
      "Trivia Option 1": "Rare manuscript archive",
      "Trivia Option 2": "3D-printing studio",
      "Trivia Option 3": "Anatomical models room",
      "Trivia Answer": "Study pods and open-access labs"
    },
    {
      "Building ID": 7,
      "Building Name": "Science Library",
      "Trivia ID": 21,
      "Trivia Question": "In which decade was the Science Library established?",
      "Trivia Option 1": "1920s",
      "Trivia Option 2": "1950s",
      "Trivia Option 3": "1970s",
      "Trivia Answer": "1960s"
    },
    {
      "Building ID": 8,
      "Building Name": "UCL School of Management",
      "Trivia ID": 22,
      "Trivia Question": "When was the UCL School of Management established at One Canada Square?",
      "Trivia Option 1": 2010,
      "Trivia Option 2": 2019,
      "Trivia Option 3": 2008,
      "Trivia Answer": 2016
    },
    {
      "Building ID": 8,
      "Building Name": "UCL School of Management",
      "Trivia ID": 23,
      "Trivia Question": "What makes the UCL School of Management’s location in One Canada Square unique?",
      "Trivia Option 1": "It has direct access to a historic campus.",
      "Trivia Option 2": "It is a purely residential tower.",
      "Trivia Option 3": "It shares the building with medical research labs.",
      "Trivia Answer": "It is situated in London’s financial district, fostering industry connections."
    },
    {
      "Building ID": 8,
      "Building Name": "UCL School of Management",
      "Trivia ID": 24,
      "Trivia Question": "What makes the UCL School of Management’s location in One Canada Square unique?",
      "Trivia Option 1": "Rooftop garden",
      "Trivia Option 2": "Central clock tower",
      "Trivia Option 3": "Gothic interiors",
      "Trivia Answer": "Modern study and research spaces"
    },
    {
      "Building ID": 9,
      "Building Name": "Student Centre",
      "Trivia ID": 25,
      "Trivia Question": "What is the UCL Student Centre known for?",
      "Trivia Option 1": "Its historical architecture",
      "Trivia Option 2": "Its exclusive library access",
      "Trivia Option 3": "Its large event spaces",
      "Trivia Answer": "24-hour study and social facilities"
    },
    {
      "Building ID": 8,
      "Building Name": "UCL School of Management",
      "Trivia ID": 26,
      "Trivia Question": "What is the highest floor occupied by the UCL School of Management in One Canada Square?",
      "Trivia Option 1": "20th floor",
      "Trivia Option 2": "38th floor",
      "Trivia Option 3": "43th floor",
      "Trivia Answer": "50th floor"
    },
    {
      "Building ID": 9,
      "Building Name": "Student Centre",
      "Trivia ID": 27,
      "Trivia Question": "What sustainability feature is notable in the Student Centre?",
      "Trivia Option 1": "Solar-powered elevators",
      "Trivia Option 2": "Underground geothermal heating",
      "Trivia Option 3": "Passive cooling system",
      "Trivia Answer": "Rainwater harvesting"
    },
    {
      "Building ID": 10,
      "Building Name": "Marshgate",
      "Trivia ID": 28,
      "Trivia Question": "What does the UCL Marshgate building primarily focus on?",
      "Trivia Option 1": "Sports science",
      "Trivia Option 2": "Law",
      "Trivia Option 3": "Fine arts",
      "Trivia Answer": "Interdisciplinary research"
    },
    {
      "Building ID": 10,
      "Building Name": "Marshgate",
      "Trivia ID": 29,
      "Trivia Question": "The Marshgate building is part of which UCL campus?",
      "Trivia Option 1": "Bloomsbury Campus",
      "Trivia Option 2": "Cruciform Campus",
      "Trivia Option 3": "Euston Campus",
      "Trivia Answer": "UCL East"
    },
    {
      "Building ID": 10,
      "Building Name": "Marshgate",
      "Trivia ID": 30,
      "Trivia Question": "What is a key architectural feature of the Marshgate building?",
      "Trivia Option 1": "Glass dome",
      "Trivia Option 2": "Floating walkways",
      "Trivia Option 3": "Spiral staircases",
      "Trivia Answer": "Open-plan research spaces"
    }
  ]

  const imgPath = ["NULL", "src/images/wilkins.jpg", "src/images/roberts.jpeg", "src/images/cruciform.jpg", "src/images/chadwick.jpg", "src/images/bartlett.jpeg", "src/images/mainlibrary.jpg", "src/images/science.jpg", "src/images/som.jpg", "src/images/studentcentre.jpg", "src/images/marshgate.jpg"]
  const buildingCoordinates = [
    { Latitude: null, Longitude: null }, // Placeholder
    { Latitude: 51.52576864, Longitude: -0.1337191997 }, // Wilkins Building
    { Latitude: 51.5235697, Longitude: -0.1320058034 },  // Roberts Building
    { Latitude: 51.52498933, Longitude: -0.1350316495 }, // Cruciform Building
    { Latitude: 51.52461436, Longitude: -0.1345569875 }, // Chadwick Building
    { Latitude: 51.52284695, Longitude: -0.1346041558 }, // Bartlett School
    { Latitude: 51.52554427, Longitude: -0.1336545807 }, // Main Library
    { Latitude: 51.52365779, Longitude: -0.1326453254 }, // Science Library
    { Latitude: 51.50505241, Longitude: -0.01933966746 }, // UCL School of Management
    { Latitude: 51.52549762, Longitude: -0.1327704056 }, // Student Centre
    { Latitude: 51.53772055, Longitude: -0.01185885678 } // Marshgate
  ];
  
  const getBuildingCoordinates = (buildingId) => {
    const building = buildingCoordinates.find(building => building["Building ID"] === buildingId);
    if (building) {
      return {
        Latitude: building["Latitude"],
        Longitude: building["Longitude"]
      };
    }
    return null; // or you can return undefined if the building is not found
  };

  function shuffleQuestions() {
    let array = ["Trivia Option 1", "Trivia Option 2", "Trivia Option 3", "Trivia Answer"]
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate random index
        [array[i], array[j]] = [array[j], array[i]];   // Swap elements
    }
    return array;
  }
  
  const [number, setNumber] = useState(1)
  const [question, setQuestion] = useState(Math.floor(Math.random() * 30)) // trivia id
  const [options, setOptions] = useState(shuffleQuestions())
  const [status, setStatus] = useState(0) // 0: thinking, 1: correct, 2: wrong
  const [correctOption, setCorrectOption] = useState(options.indexOf("Trivia Answer") + 1)
  const [option1, setOption1] = useState(data[question][options[0]])
  const [option1Color, setOption1Color]= useState("btn-secondary")
  const [option2, setOption2] = useState(data[question][options[1]])
  const [option2Color, setOption2Color]= useState("btn-secondary")
  const [option3, setOption3] = useState(data[question][options[2]])
  const [option3Color, setOption3Color]= useState("btn-secondary")
  const [option4, setOption4] = useState(data[question][options[3]])
  const [option4Color, setOption4Color]= useState("btn-secondary")
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(10)
  const [stop, setStop] = useState(false)

  useEffect(() => {
    if (stop) {
      return;
    }
    if (time <= 0) {
      handleAnswer(0);
      return; // Stop the timer when it reaches 0
    }
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [time, stop]);

  const handleAnswer = (ans) => {
    setStop(true);
    if (correctOption == 1) {
      setOption1Color("btn-success")
    }
    else if (correctOption == 2) {
      setOption2Color("btn-success")
    }
    else if (correctOption == 3) {
      setOption3Color("btn-success")
    }
    else if (correctOption == 4) {
      setOption4Color("btn-success")
    }
    if (ans == correctOption) {
      if (time >= 8) {
        setScore(score + 3)
      }
      else if (time >= 5) {
        setScore(score + 2)
      }
      else {
        setScore(score + 1)
      }
      setStatus(1)
    }
    else {
      if (ans == 1) {
        setOption1Color("btn-danger")
      }
      else if (ans == 2) {
        setOption2Color("btn-danger")
      }
      else if (ans == 3) {
        setOption3Color("btn-danger")
      }
      else if (ans == 4) {
        setOption4Color("btn-danger")
      }
      setStatus(2)
    }
  }

  const handleNext = () => {
    setNumber(prevNumber => prevNumber + 1);
    const newQuestion = Math.floor(Math.random() * 30);
    setQuestion(newQuestion);
    const newOptions = shuffleQuestions();
    setOptions(newOptions);
    setStatus(0);
    setCorrectOption(newOptions.indexOf("Trivia Answer") + 1);
    setOption1(data[newQuestion][newOptions[0]]);
    setOption1Color("btn-secondary");
    setOption2(data[newQuestion][newOptions[1]]);
    setOption2Color("btn-secondary");
    setOption3(data[newQuestion][newOptions[2]]);
    setOption3Color("btn-secondary");
    setOption4(data[newQuestion][newOptions[3]]);
    setOption4Color("btn-secondary");
    setTime(10);
    setStop(false);
}

  const handleRestart = () => {
    setNumber(1)
    setScore(0)
  }

  if (number > 15) {
    return (
      <>
        <nav className="navbar navbar-expand-lg text-secondary bg-primary p-3">
          <h1 className="navbar-brand text-white" href="#">UCLGuessr</h1>
        </nav>
        <br /><br /><br /><br /><br /><br />
        <div className="text-center">
          <h1>Thank you for Playing UCLGuessr!</h1>
          <br />
          <h1>Your Score: {score}</h1>
          <br />
          <button className="btn btn-primary" onClick={handleRestart}>Try Again</button>
        </div>
      </>
    )
  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg text-secondary p-3" style={{ backgroundColor: '#500778' }}>
        <h1 className="navbar-brand text-white" href="#">UCLGuessr</h1>
      </nav>
      <br />
      <div className="row px-4">
        <div className="col"><p className='text-start lead'>Question: {number}/15</p></div>
        <div className="col"><p className='text-center lead'>Remaining Time: {time} sec</p></div>
        <div className="col"><p className='text-end lead'>Score: {score}</p></div>
      </div>
      <br />
      <div className="text-center">
        <div className="row">
          <div className="col"><center><img src={imgPath[data[question]["Building ID"]]} className="img-fluid h-100 center-block"/></center></div>
          <div className="col"><center><MapComponent coordinates={buildingCoordinates[data[question]["Building ID"]]} /></center></div>
        </div>
        <br /><br />
        <h2 className={status == 1 ? "text-success lead" : status == 2 ? "text-danger lead" : "text-white lead"}>{(status == 1 && time >= 8) ? "Correct! (+3 Points)" : (status == 1 && time >= 5) ? "Correct! (+2 Points)" : status == 1 ? "Correct! (+1 Point)" : status == 2 ? "Incorrect! (+0 Points)" : ""}</h2>
        <h1 className="lead">{data[question]["Trivia Question"]}</h1>
        <br />
        <div className="row">
          <div className="col"></div><div className="col"></div><div className="col"></div>
          <div className="col">
            <button className={`btn h-100 ${option1Color} ${status != 0 && "disabled"}`} aria-disabled="true" onClick={() => handleAnswer(1)}>{option1}</button>
          </div>
          <div className="col">
            <button className={`btn h-100 ${option2Color} ${status != 0 && "disabled"}`} aria-disabled="true" onClick={() => handleAnswer(2)}>{option2}</button>
          </div>
          <div className="col"></div><div className="col"></div><div className="col"></div>
        </div>
        <br />
        <div className="row">
          <div className="col"></div><div className="col"></div><div className="col"></div>
          <div className="col">
            <button className={`btn h-100 ${option3Color} ${status != 0 && "disabled"}`} aria-disabled="true" onClick={() => handleAnswer(3)}>{option3}</button>
          </div>
          <div className="col">
            <button className={`btn h-100 ${option4Color} ${status != 0 && "disabled"}`} aria-disabled="true" onClick={() => handleAnswer(4)}>{option4}</button>
          </div>
          <div className="col"></div><div className="col"></div><div className="col"></div>
        </div>
        <br />
        <div className="row px-5">
          <div className="col"><button className={`btn btn-primary ${status == 0 && "disabled"}`} aria-disabled="true" onClick={handleNext}>Next Question</button></div>
        </div>
        <br /> 
      </div>
    </>
  )
}

export default App
