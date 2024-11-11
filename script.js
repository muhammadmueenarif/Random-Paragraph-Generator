const paragraphs = [
    "JavaScript is a high-level, interpreted programming language that is primarily used for building interactive and dynamic web pages. It runs on the client side, meaning it is executed on the user's web browser.",
    "One of the key features of JavaScript is its ability to manipulate and modify the content of web pages in real-time. This enables developers to create engaging user experiences by dynamically updating the page without requiring a full refresh.",
    "JavaScript is often used alongside HTML and CSS to create modern, interactive websites. HTML provides the structure, CSS handles the styling, and JavaScript handles the behavior and functionality.",
    "Dino Code Academy is an online learning platform that offers courses in various programming languages, including JavaScript and Android app development. It provides a comprehensive curriculum and interactive coding exercises to help learners build practical skills.",
    "JavaScript is known for its flexibility and extensive libraries and frameworks. It has a vast ecosystem of tools and resources that make it easier for developers to create complex applications efficiently.",
    "Android Studio is the official integrated development environment (IDE) for Android app development. It provides a rich set of tools and features, including a code editor, visual layout editor, and emulator, to streamline the development process.",
    "Dino Code Academy offers hands-on projects and coding challenges to reinforce learning and practical application of JavaScript and Android development concepts. These projects help learners build real-world experience and showcase their skills.",
    "JavaScript frameworks like AngularJS and Vue.js are popular choices for building robust web applications. They provide a structured approach to development, with features like data binding, component-based architecture, and powerful routing capabilities.",
    "Android offers a wide range of features and APIs that allow developers to access device hardware and sensors, integrate with other apps, and create immersive user experiences. It supports multi-threading, push notifications, and advanced graphics rendering.",
    "Dino Code Academy curriculum covers a comprehensive range of topics in JavaScript, Android app development, and other programming languages. It caters to beginners as well as intermediate and advanced learners, providing a learning path suitable for different skill levels.",
  ];
  function generateParagraph() {
    document.getElementsByClassName("container")[0].style.height = "auto";
    var userInput = document.getElementsByTagName("input")[0].value;
  
    if (userInput == "0") {
      alert("Please enter number of paragraphs you want to generate");
    } else if (userInput < 0) {
      alert("Please enter a positive integer");
    } else if (userInput > paragraphs.length) {
      var container = document.getElementsByClassName("container")[0];
      var paragraph = document.createElement("p");
      paragraph.textContent =
        paragraphs[Math.floor(Math.random() * paragraphs.length)];
      container.appendChild(paragraph);
    } else {
      for (var i = 0; i < userInput; i++) {
        var container = document.getElementsByClassName("container")[0];
        var paragraph = document.createElement("p");
        paragraph.textContent =
          paragraphs[Math.floor(Math.random() * paragraphs.length)];
        container.appendChild(paragraph);
      }
    }
  }