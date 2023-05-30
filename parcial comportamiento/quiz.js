const questions = [
    {
      question: "¿Cuál es la capital de Colombia?",
      options: [" Bogotá", " Medellin", " Cali", " Cartagena"],
      answer: "a"
    },
    {
      question: "¿Cuál de las siguientes ciudades colombianas es famosa por su festival de salsa?",
      options: [" Bogotá", " Medellín", " Cali", " Barranquilla"],
      answer: "c"
    },
    {
      question: "¿Cuál de los siguientes platos es una sopa tradicional colombiana?",
      options: [" Ceviche", " pescado", " Patacón", " Sancocho"],
      answer: "d"
    },
    {
      question: "¿Cuál de las siguientes ciudades colombianas es famosa por su arquitectura colonial y sus hermosas playas?",
      options: [" Medellín", " Cartagena", " Bogotá", " Cali"],
      answer: "b"
    },
    {
      question: "¿Cuál de las siguientes comidas es un plato tradicional de la región caribeña de Colombia?",
      options: [" Bandeja paisa", " Sancocho de pescado", " Ajiaco", " Lechona"],
      answer: "b"
    },
    {
      question: "¿Cuál de las siguientes regiones de Colombia es conocida por su gran biodiversidad y sus selvas tropicales?",
      options: [" La Región Andina", " La Región Caribe", " CaliLa Región Pacífica", " La Región Amazónica"],
      answer: "d"
    },
    {
      question: "¿Cuál de las siguientes ciudades colombianas es famosa por sus coloridas fachadas y su festival de flores?",
      options: [" Barranquilla", " Bogotá", " Santa Marta", " Medellín"],
      answer: "d"
    },
    {
      question: "¿Cuál de las siguientes celebraciones es una de las festividades más importantes y coloridas de Colombia?",
      options: [" El Día de los Muertos", " El Carnaval de Barranquilla", " La Semana Santa", " El Día de la Independencia"],
      answer: "b"
    },
    {
      question: "¿Cuál de los siguientes deportes es considerado el más popular en Colombia?",
      options: [" Fútbol", " Béisbol", " Baloncesto", " Tenis"],
      answer: "a"
    },
    {
      question: "¿Cuál de los siguientes escritores colombianos ganó el Premio Nobel de Literatura en 1982?",
      options: [" Gabriel García Márquez", " Jorge Luis Borges", " Mario Vargas Llosa", " Pablo Neruda"],
      answer: "a"
    },
    {
      question: "¿Cuál es una costumbre destacada en la región de la Orinoquia colombiana?",
      options: [" el joropo", " la danza", " la maloca", " la champeta"],
      answer: "a"
    },


  {
      question: "¿Qué festival es famoso en la región del Eje Cafetero?",
      options: [" el Festival de la Cosecha ", " festival del baile", " festival del mango", " festival de negros"],
      answer: "a"
    },

{
      question: "¿Cuál es una costumbre indígena reconocida en la región amazónica de Colombia?",
      options: [" la champeta ", " la danza", " la maloca", " festival de negros"],
      answer: "c"
    },

{
      question: "¿Qué instrumento musical es emblemático de la región de San Andrés y Providencia?",
      options: [" el steel pan", " la guitarra", " el acordeon ", " el tambor "],
      answer: "a"
    },
    
{
  question: "¿En qué región de Colombia es una costumbre usar el sombrero vueltiao?",
  options: [" region caribe ", " region amazonica", " region andina ", " region oriniquia"],
  answer: "a"
},

{
  question: "¿Qué baile tradicional se asocia con la región del Pacífico colombiano?",
  options: [" mapale ", " el currulao ", " salsa ", " champeta"],
  answer: "b"
},
{
  question: " ¿Cuál es el mito más conocido de la región del Caribe colombiano?",
  options: [" La llorona ", " Hombre caiman ", " el zorro ", " El sin cabeza"],
  answer: "a"
},
{
  question: " ¿Qué mito se destaca en la región Andina de Colombia?",
  options: [" La llorona ", " El Mohán ", " el zorro ", " El sin cabeza"],
  answer: "b"
},
{
  question: " ¿Qué mito es emblemático de la región de San Andrés y Providencia?",
  options: [" La llorona ", " El Mohán ", " La madremonte ", " La pata sola"],
  answer: "d"
},


  ];
  
  const questionContainer = document.querySelector(".question-container");
  const question = questionContainer.querySelector(".question");
  const options = questionContainer.querySelector(".options");
  const submit = questionContainer.querySelector(".submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    question.textContent = questions[currentQuestion].question;
    options.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
      const li = document.createElement("li");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = String.fromCharCode(97 + i);
      li.appendChild(input);
      li.appendChild(document.createTextNode(questions[currentQuestion].options[i]));
      options.appendChild(li);
    }
  }
  
  function checkAnswer() {
    const selected = options.querySelector("input:checked");
    if (selected && selected.value === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }
  
  function endGame() {
    questionContainer.innerHTML = "";
    const result = document.createElement("p");
    result.textContent = `GENIAAAAAAAAALLLL !!!! Obtuviste ${score} de ${questions.length} preguntas correctas, Sigue estudiando y adquiriendo mas conocimiento  sobre NUESTRO PAIS.`;
    questionContainer.appendChild(result);
  }
  
  showQuestion();
  submit.addEventListener("click", checkAnswer);