# 🧠 Memento
⚡ Smarter flashcards, Smarter learning. 🧠
[Devpost](https://devpost.com/software/memento-horenc)
[Static hosting](https://memento-flashcards.netlify.app/)

## 💡Initial Inspiration for the project
As students and learners, taking notes and studying flashcards is an essential part of studying for tests and remembering information. We wanted to make reviewing notes and flashcards as easy as making them, saving time, effort, and resulting in a better understanding of the material. Memento lets you learn smarter, not harder.

## ❗Important details
Memento comes from the Latin word meaning “remember”. It’s phonetic spelling is “mɪˈmɛntəʊ
“. All notes in Memento are referred to as “Moments” because alliteration or something.

## 🛠 What it actually does
AI-GENERATED FLASHCARDS: Memento combines the powerful power of AI with the pitiful power of the human brain. It generates flashcards directly from your Moments, picking out big ideas and important details for you to remember. This allows you to study on-the-go, saving time and energy. Each Moments can generate up to 5 flashcards about the big ideas and themes of the text. It works best with longer, more detailed Moments.

OPTICAL CHARACTER RECOGNITION: Additionally, Memento is a fully-featured note-taking app. It includes an OCR system that allows the user to take a photo or screenshot and have the text extracted for use. This could be used when there is a long text written on the whiteboard or on a textbook and the user doesn’t want to waste time manually copying it over.

FULLY-FEATURED NOTE APP: Memento makes it easy to create, generate, and study on the go. The intuitive UI in combination with the agile text editor makes taking 

## 🥚 What it does NOT do
COOK YOU AN OMELETTE: Unfortunately, since Memento is an AI-powered note-taking app, it does not have the physical ability to cook an omelette. As the developers of this app, we profusely apologize for the inconvenience caused by our utter laziness to not implement omelette-cooking abilities into our app. 

## 🏠 How we built it
The frontend is compiled with `React`, `Typescript`, and `react-router`. For the user interface, we used `TailwindCSS` and `Sass`. 

To auto-generate the flashcards, we used `cohere`’s summary and generate models. We used `tesseract.js` to extract text from images.

On the backend, we used `MongoDB`, `Typescript`, `Express`, and `Node.js`  to create the user authentication system.

The website is deployed with Microsoft Azure and GitHub Actions. We used Git as our version control system.

We also used `MacOS`, `Ubuntu`, the `English` language, and a couple luminescent stone tablets.

## 🧱 Challenges we ran into
The path of Memento was not a smooth one. Along the way, we ran into many problems. Our first major issue was with Cohere. Since we wanted the AI to generate flashcards for us, we needed to access its output programmatically. This meant that the AI would have to use a consistent output format. This proved difficult, as small changes to the prompt would result in completely different output formats. Other issues included setting up Azure, since none of us had much experience with anything similar.

The backend side of our app was a struggle, since we did not decide on whether it was necessary until later into the hackathon. As Node has two import formats (Commonjs and ESM), we wasted a lot of time trying to get ONE of the formats to somehow work, as well as coexist with our other tools such as Typescript and MongoDB/Mongoose. As most of the Node.js articles and resources online use Commonjs, we had to utilize every single cell in our brain (that wasn’t dead) to get the tools working with ESM. After those cells died, we had to use the dead cells as well to connect the backend with the frontend.

## 🌲 Striving for Sustainability
Deforestation is one of the biggest issues plaguing our society today. To combat this, Memento is encouraging digitization of notes and schoolwork, making it cheap and accessible to study and take notes. Instead of creating flashcards and notes on paper, users can create Moments and AI-generate their flashcards on Memento.

## → What's next for Memento
There are many things we hope to add to Memento, that require a bit more time. Most of these extend our existing features. These include further expanding our use of MongoDB, the ability to perform more operations on cards and moments, a revamped spaced repetition algorithm, and more quality-of-life features. In general, however, we are very happy with how the project turned out.

Additionally, we hope to completely replace all of the note taking apps out there such as Notion, Obsidian, Remnote, Logseq, because our project is clearly superior. Optimistically, we can take the world’s education by storm and profit off of the toddlers who can’t study well because they are too focused on playing Roblox. Inevitably, Memento will have a net worth of $1234 billion and be acquired by Elon Musk.
