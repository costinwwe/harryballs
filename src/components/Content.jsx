import React, { useState } from 'react'
import assets from "../assets/assets"

const Content = () => {
  // Quiz state management
  const [quizAnswers, setQuizAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: ''
  });
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Handle quiz answer selection
  const handleAnswerChange = (question, answer) => {
    setQuizAnswers({
      ...quizAnswers,
      [question]: answer
    });
  };

  // Handle quiz submission
  const handleQuizSubmit = (e) => {
    e.preventDefault();
    
    // Correct answers
    const correctAnswers = {
      q1: 'b', // Daniel Radcliffe
      q2: 'c', // July 31, 1980
      q3: 'a', // Scottish Highlands
      q4: 'b', // Power, growth, and identity
      q5: 'c', // J.K. Rowling uses "K" as a tribute to her grandmother
      q6: 'a', // Ron Weasley and Hermione Granger
      q7: 'b', // 7
      q8: 'c'  // Platform 9¾
    };
    
    // Calculate score
    let newScore = 0;
    Object.keys(correctAnswers).forEach(question => {
      if (quizAnswers[question] === correctAnswers[question]) {
        newScore += 1;
      }
    });
    
    setScore(newScore);
    setQuizSubmitted(true);
  };

  // Reset quiz
  const resetQuiz = () => {
    setQuizAnswers({
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
      q7: '',
      q8: ''
    });
    setQuizSubmitted(false);
    setScore(0);
  };

  return (
    <div className="content">
      <h1>Harry Potter Blog</h1>
      
      <section id="harry-potter">
        <h2>1. Who is Harry Potter?</h2>
        <p>
          Harry Potter is a fictional character and the protagonist of J.K. Rowling's iconic book series.
          He is a young wizard known for his bravery, loyalty, and the unique lightning-shaped scar on
          his forehead, a mark left by the dark wizard Lord Voldemort during an attack that killed
          Harry's parents.
        </p>
        <p>
          Born on July 31, 1980, Harry is raised by his cruel relatives, the Dursleys, who treat him poorly
          and hide the truth about his magical heritage. On his 11th birthday, Harry discovers he is a
          wizard and receives an invitation to attend Hogwarts School of Witchcraft and Wizardry.
          There, he finds a sense of belonging and forms close friendships with Ron Weasley and
          Hermione Granger, who become his trusted allies.
        </p>
        <p>
          Harry is courageous and selfless, often risking his life to protect others. Throughout the series,
          he grapples with the weight of his destiny as "The Chosen One," prophesied to defeat
          Voldemort and restore peace to the wizarding world. Despite his fame and extraordinary
          abilities, Harry remains humble, valuing love, friendship, and justice above all else.
        </p>
        <div className="image-container">
          <img src={assets.harry} alt="Harry Potter" className="character-image" />
          <div className="image-caption">The iconic Harry Potter with his lightning scar and wand</div>
        </div>
        
        <section id="harry-potter-actor">
          <h3>1.1 The Actor behind Harry Potter</h3>
          <p>
            The actor who portrayed Harry Potter in the film adaptations of J.K. Rowling's book series is
            Daniel Radcliffe. He was cast in the role at the age of 11 and played Harry throughout all eight
            films, from Harry Potter and the Sorcerer's Stone (2001) to Harry Potter and the Deathly
            Hallows – Part 2 (2011).
          </p>
          <p>
            Daniel Radcliffe's portrayal of Harry Potter made him internationally famous and cemented
            him as one of the most recognizable actors of his generation. His performance evolved
            alongside the character, capturing Harry's growth from a young, naive wizard to a courageous,
            self-assured hero.
          </p>
          <p>
            After finishing the Harry Potter series, Radcliffe went on to pursue a wide range of diverse
            roles in both film and theater, demonstrating his versatility as an actor. Some of his notable
            post-Potter projects include The Woman in Black (2012), Swiss Army Man (2016), and Now
            You See Me 2 (2016).
          </p>
          <div className="image-container">
            <img src={assets.daniel} alt="Daniel Radcliffe" className="character-image" />
            <div className="image-caption">Daniel Radcliffe, who brought Harry Potter to life on screen</div>
          </div>
        </section>
      </section>

      <section id="introduction">
        <h2>2. A brief introduction to the volume</h2>
        <p>
          Each book in the series corresponds to a year of Harry's education at Hogwarts School of
          Witchcraft and Wizardry, where he is mentored by wise and caring figures like Professor
          Dumbledore. Throughout the series, Harry faces dangers, uncovers secrets, and ultimately
          learns that he is the key to defeating Voldemort, who seeks to dominate the wizarding world.
        </p>
        <p>
          The Harry Potter books blend themes of friendship, courage, love, and the battle between good
          and evil. They are set in a richly detailed magical world filled with fantastical creatures, spells,
          and magical artifacts, offering readers an escape into an imaginative universe. The series has
          become a global phenomenon, influencing literature, films, and pop culture.
        </p>

        <section id="introduction-summary">
          <h3>2.1 Summary</h3>
          <p>
            The Harry Potter series tells the story of a young wizard, Harry Potter, who discovers his
            magical heritage on his 11th birthday. As he attends Hogwarts School of Witchcraft and
            Wizardry, he befriends Ron Weasley and Hermione Granger. Together, they uncover the truth
            about Harry's past and his connection to the dark wizard Lord Voldemort, who killed his
            parents and seeks to regain power.
          </p>
          <p>
            Throughout the series, Harry faces challenges that test his courage, loyalty, and magical skills.
            He learns about the prophecy declaring him the "Chosen One" destined to defeat Voldemort.
            The story culminates in the Battle of Hogwarts, where Harry and his allies confront Voldemort
            in a final showdown. With bravery and sacrifice, Harry defeats Voldemort, bringing peace to
            the wizarding world.
          </p>
        </section>
      </section>

      <section id="author">
        <h2>3. J.K. Rowling: The Creator Behind the Magic</h2>
        <p>
          Joanne Rowling, known professionally as J.K. Rowling, is the British author who created the
          Harry Potter series, one of the most successful and beloved literary franchises of all time. Born
          on July 31, 1965, in Yate, Gloucestershire, England, Rowling had a passion for writing from
          a young age. However, her journey to literary success was far from easy.
        </p>
        <div className="image-container">
          <img src={assets.joane} alt="J.K. Rowling" className="character-image" />
          <div className="image-caption">J.K. Rowling, the brilliant author behind the Harry Potter series</div>
        </div>
        
        <section id="author-biography">
          <h3>3.1 The biography of the author</h3>
          <p>
            Full Name: Joanne Rowling (J.K. Rowling is a pen name; she uses "K" as a tribute to her
            paternal grandmother, Kathleen).
            Born: July 31, 1965, in Yate, Gloucestershire, England.
          </p>
        </section>

        <section id="author-inspirations">
          <h3>3.2 Inspirations for the Harry Potter universe</h3>
          <p>
            The Harry Potter series was shaped by a combination of J.K. Rowling's personal experiences,
            literary influences, and elements from mythology and folklore.
          </p>
          <ol>
            <li>
              <strong>Personal Experiences:</strong> Rowling's own struggles with loss and loneliness influenced
              themes of family, sacrifice, and overcoming hardship. The death of her mother and her
              life as a single mother were pivotal in shaping Harry's emotional journey.
            </li>
            <li>
              <strong>Mythology and Folklore:</strong> Many creatures and elements of the magical world draw
              from British folklore and classical mythology. For example, Cerberus (the threeheaded dog) and Minerva McGonagall (named after the Roman goddess of wisdom)
              reflect these influences.
            </li>
            <li>
              <strong>Literary Influences:</strong> Rowling was inspired by works such as C.S. Lewis's Chronicles
              of Narnia, J.R.R. Tolkien's The Hobbit, and classic British school stories. These
              authors' use of magical worlds and themes of good versus evil shaped her storytelling
              style.
            </li>
            <li>
              <strong>Historical and Social Context:</strong> Elements of the wizarding world, like the Ministry of
              Magic, are influenced by British societal structures. The rise of Voldemort and his
              followers parallels the themes of fascism and totalitarianism, echoing the conflict of
              WWII.
            </li>
            <li>
              <strong>Fairy Tales and Magic:</strong> Rowling's love of fairy tales and magic is reflected in the
              enchanted objects, magical creatures, and moral lessons in the series, such as bravery,
              love, and the battle between good and evil.
            </li>
          </ol>
        </section>
      </section>

      <section id="wizarding-world">
        <h2>4. The Wizarding World: A Unique Setting</h2>
        <p>
          The Wizarding World of Harry Potter is a rich and imaginative universe that is intricately
          detailed and full of wonder, mystery, and danger. J.K. Rowling crafted a world that exists
          alongside the ordinary, or Muggle, world, yet is entirely separate, with its own rules, magical
          creatures, and history. This unique setting is one of the main elements that contributes to the
          enduring appeal of the series.
        </p>

        <section id="wizarding-world-hogwarts">
          <h3>4.1 Hogwarts School of Witchcraft and Wizardry</h3>
          <p>
            Hogwarts School of Witchcraft and Wizardry, or simply Hogwarts, is the central setting for
            much of the Harry Potter series. It is a magical boarding school located in the Scottish
            Highlands and serves as the educational institution for young witches and wizards in the United
            Kingdom. The school plays a crucial role in shaping the characters, particularly Harry Potter,
            and serves as a backdrop for many of the adventures, friendships, and challenges that the
            students face.
          </p>
          <ul>
            <li>
              <strong>Location and Appearance:</strong> Hogwarts is located in a remote part of Scotland, hidden
              from the non-magical world, with enchanted spells preventing Muggles from seeing it.
              The castle itself is vast and ancient, with towering spires, turrets, and numerous hidden
              rooms. It is surrounded by a large, mysterious forest known as the Forbidden Forest
              and a shimmering lake, home to many magical creatures.
            </li>
            <li>
              <strong>The Heart of the Series:</strong> Hogwarts is arguably the most iconic and beloved location in
              the Wizarding World. It is a magical school where young witches and wizards receive
              their education in various magical subjects, such as Potions, Defense Against the Dark
              Arts, and Transfiguration.
            </li>
            <li>
              <strong>Magical Architecture:</strong> The school itself is filled with magic, from the moving
              staircases and secret passages to the enchanted ceilings of the Great Hall, which reflect
              the weather outside. The castle is also home to countless magical artifacts, including
              the Sorting Hat, which chooses the house for each new student.
            </li>
          </ul>
        </section>
      </section>

      <section id="magic">
        <h2>5. The Role of Magic in Harry Potter</h2>
        <p>
          Magic is at the heart of the Harry Potter series, shaping the world in which the characters live
          and influencing the events that unfold throughout the story. It is not just a tool for performing
          extraordinary feats but also a metaphor for themes such as power, responsibility, and the nature
          of good versus evil. Magic in the Harry Potter universe is multifaceted, and its role extends far
          beyond the spell-casting and creature encounters that we typically associate with the term.
          Below are key aspects of how magic functions and plays a pivotal role throughout the series.
        </p>

        <section id="magic-symbolism">
          <h3>5.1 The symbolism of magic in the story</h3>
          <p>
            Magic in Harry Potter goes beyond a mere tool for casting spells; it serves as a powerful
            symbol that reflects the series' themes and the characters' journeys. Here are key symbolic
            meanings of magic in the story:
          </p>
          <ol>
            <li>
              <strong>Magic as Power and Responsibility</strong><br />
              Magic represents power and how it's used responsibly. Voldemort symbolizes the corrupting
              influence of unchecked power, using magic for domination. In contrast, Harry learns to use
              magic selflessly, symbolizing moral growth and the importance of responsibility.
              Magic symbolizes personal growth. For Harry, it represents his journey of self-discovery as
              he learns about his past and purpose. Hermione's growth with magic reflects intellectual
              empowerment and the value of hard work.
              Magic connects to identity, especially through the concept of blood status (pure-blood, halfblood, Muggle-born). Hermione, as a Muggle-born, challenges societal prejudices, while
              Voldemort's obsession with blood purity highlights the dangers of such divisions. Magic also
              reflects themes of discrimination, seen in the treatment of magical creatures.
              In summary, magic in Harry Potter symbolizes power, growth, and identity, shaping both the
              characters' journeys and the moral lessons of the series.
            </li>
          </ol>
        </section>
      </section>

      <section id="cultural-impact">
        <h2>6. Cultural and Social Impact</h2>
        <p>
          The Harry Potter series has had a profound cultural and social impact, influencing readers
          worldwide and sparking discussions on important social issues.
          The books and films became a global phenomenon, revitalizing interest in reading, particularly
          for young audiences, and inspiring theme parks, merchandise, and fan communities.
          Harry Potter addresses themes like prejudice, inequality, and social justice, with issues such
          as blood purity mirroring racism and classism, and the treatment of magical creatures raising
          questions about labor rights.
          Terms like "Muggle" and "Quidditch" have become part of everyday language, while the series
          has influenced films, TV shows, and books, highlighting themes of friendship, courage, and
          loyalty.
          The series has fostered a global fan community, with fan fiction, conventions, and online
          discussions expanding the world and connecting readers.
        </p>
        <p>
          Harry Potter has been used in classrooms to promote literacy, creativity, and discussions on
          social issues, engaging young readers and encouraging critical thinking.
          In short, the Harry Potter series has shaped global culture, influenced social debates, and left
          a lasting legacy in literature, pop culture, and education.
        </p>

        <section id="cultural-impact-literature">
          <h3>6.1 Influence on young adult fantasy literature</h3>
          <p>
            The Harry Potter series revolutionized young adult (YA) fantasy literature, bringing the genre
            into the mainstream and inspiring a new wave of writers and readers. Its global success
            demonstrated the potential of fantasy to captivate audiences, particularly young readers, and
            encouraged other authors to explore similar themes and magical worlds.
            One of Harry Potter's most significant influences is its emphasis on friendship, courage, and
            self-discovery. These themes became central to many YA fantasy stories, where protagonists
            face challenges and grow through personal journeys. Rowling's intricate world-building also
            set a new standard for fantasy authors, inspiring them to create detailed, immersive settings.
            Additionally, Harry Potter helped push for greater representation in the genre, influencing
            more inclusive narratives with diverse characters from various backgrounds. The series also
            paved the way for other popular books like The Hunger Games and Percy Jackson, which share
            themes of personal growth, friendship, and magical adventures.
          </p>
        </section>
      </section>

      <section id="locations">
        <h2>7. Real life Harry Potter locations you can visit</h2>
        
        <section id="locations-kings-cross">
          <h3>7.1 King's Cross Station – London, England</h3>
          <p>
            Famous for the magical departure point at Platform 9¾, King's Cross Station is a must-visit
            for fans. There's even a dedicated Platform 9¾ photo spot with a luggage trolley
            "disappearing" into the wall and a Harry Potter shop nearby for souvenirs.
          </p>
        </section>

        <section id="locations-durham">
          <h3>7.2 Durham Cathedral – Durham, England</h3>
          <p>
            Durham Cathedral's stunning cloisters served as the Hogwarts courtyard in several films,
            including Harry Potter and the Philosopher's Stone and Harry Potter and the Chamber of
            Secrets. Walking through its ancient stone corridors truly feels like stepping into Hogwarts.
          </p>
        </section>

        <section id="locations-glenfinnan">
          <h3>7.3 Glenfinnan Viaduct – Scotland</h3>
          <p>
            Located in the Scottish Highlands, the Glenfinnan Viaduct is where you can see the iconic
            Hogwarts Express crossing the arched bridge. You can even ride the Jacobite Steam Train,
            which follows the same route seen in the films, offering breathtaking views of the countryside.
          </p>
        </section>
      </section>

      <section id="relevance">
        <h2>8. Why Harry Potter remains relevant to new generations</h2>
        
        <section id="relevance-themes">
          <h3>8.1 Timeless Themes and Universal Values</h3>
          <p>
            The Harry Potter series explores universal themes such as friendship, courage, love, and the
            struggle between good and evil. These timeless messages resonate with readers of all ages,
            making the story relatable regardless of the era.
          </p>
        </section>

        <section id="relevance-characters">
          <h3>8.2 Complex, Relatable Characters</h3>
          <p>
            Characters like Harry, Hermione, and Ron are deeply human, with flaws, strengths, and
            growth arcs that reflect real-life experiences. Readers see themselves in their struggles with
            identity, loyalty, and moral choices.
          </p>
        </section>

        <section id="relevance-world">
          <h3>8.3 A Rich, Immersive World</h3>
          <p>
            Rowling's detailed and magical world offers an escape from reality while still being anchored
            in recognizable emotions and social dynamics. The magical setting is endlessly fascinating to
            young minds discovering the books for the first time.
          </p>
        </section>
      </section>

      <section id="quizz">
        <h2>9. Quiz time!!</h2>
        <p>
          Test your knowledge about Harry Potter and the Wizarding World with this interactive quiz.
          Answer all questions and see how well you know the magical universe created by J.K. Rowling!
        </p>
        
        <div className="quiz-container">
          {!quizSubmitted ? (
            <form onSubmit={handleQuizSubmit} className="quiz-form">
              <div className="quiz-question">
                <h3>1. Who played Harry Potter in the film series?</h3>
                <div className="quiz-options">
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q1" 
                      value="a" 
                      checked={quizAnswers.q1 === 'a'} 
                      onChange={() => handleAnswerChange('q1', 'a')}
                      required 
                    />
                    <span>Rupert Grint</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q1" 
                      value="b" 
                      checked={quizAnswers.q1 === 'b'} 
                      onChange={() => handleAnswerChange('q1', 'b')} 
                    />
                    <span>Daniel Radcliffe</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q1" 
                      value="c" 
                      checked={quizAnswers.q1 === 'c'} 
                      onChange={() => handleAnswerChange('q1', 'c')} 
                    />
                    <span>Tom Felton</span>
                  </label>
                </div>
              </div>
              
              <div className="quiz-question">
                <h3>2. When was Harry Potter born?</h3>
                <div className="quiz-options">
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q2" 
                      value="a" 
                      checked={quizAnswers.q2 === 'a'} 
                      onChange={() => handleAnswerChange('q2', 'a')} 
                      required
                    />
                    <span>July 31, 1981</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q2" 
                      value="b" 
                      checked={quizAnswers.q2 === 'b'} 
                      onChange={() => handleAnswerChange('q2', 'b')} 
                    />
                    <span>June 25, 1980</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q2" 
                      value="c" 
                      checked={quizAnswers.q2 === 'c'} 
                      onChange={() => handleAnswerChange('q2', 'c')} 
                    />
                    <span>July 31, 1980</span>
                  </label>
                </div>
              </div>
              
              <div className="quiz-question">
                <h3>3. Where is Hogwarts School of Witchcraft and Wizardry located?</h3>
                <div className="quiz-options">
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q3" 
                      value="a" 
                      checked={quizAnswers.q3 === 'a'} 
                      onChange={() => handleAnswerChange('q3', 'a')} 
                      required
                    />
                    <span>Scottish Highlands</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q3" 
                      value="b" 
                      checked={quizAnswers.q3 === 'b'} 
                      onChange={() => handleAnswerChange('q3', 'b')} 
                    />
                    <span>Northern Wales</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q3" 
                      value="c" 
                      checked={quizAnswers.q3 === 'c'} 
                      onChange={() => handleAnswerChange('q3', 'c')} 
                    />
                    <span>Southern England</span>
                  </label>
                </div>
              </div>
              
              <div className="quiz-question">
                <h3>4. What does magic symbolize in the Harry Potter series?</h3>
                <div className="quiz-options">
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q4" 
                      value="a" 
                      checked={quizAnswers.q4 === 'a'} 
                      onChange={() => handleAnswerChange('q4', 'a')} 
                      required
                    />
                    <span>Only entertainment and fantasy elements</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q4" 
                      value="b" 
                      checked={quizAnswers.q4 === 'b'} 
                      onChange={() => handleAnswerChange('q4', 'b')} 
                    />
                    <span>Power, growth, and identity</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q4" 
                      value="c" 
                      checked={quizAnswers.q4 === 'c'} 
                      onChange={() => handleAnswerChange('q4', 'c')} 
                    />
                    <span>Only technological advancement</span>
                  </label>
                </div>
              </div>
              
              <div className="quiz-question">
                <h3>5. What does the "K" in J.K. Rowling's name stand for?</h3>
                <div className="quiz-options">
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q5" 
                      value="a" 
                      checked={quizAnswers.q5 === 'a'} 
                      onChange={() => handleAnswerChange('q5', 'a')} 
                      required
                    />
                    <span>Katherine, her middle name</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q5" 
                      value="b" 
                      checked={quizAnswers.q5 === 'b'} 
                      onChange={() => handleAnswerChange('q5', 'b')} 
                    />
                    <span>King, her husband's surname</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q5" 
                      value="c" 
                      checked={quizAnswers.q5 === 'c'} 
                      onChange={() => handleAnswerChange('q5', 'c')} 
                    />
                    <span>It's a tribute to her grandmother Kathleen</span>
                  </label>
                </div>
              </div>
              
              <div className="quiz-question">
                <h3>6. Who are Harry's best friends at Hogwarts?</h3>
                <div className="quiz-options">
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q6" 
                      value="a" 
                      checked={quizAnswers.q6 === 'a'} 
                      onChange={() => handleAnswerChange('q6', 'a')} 
                      required
                    />
                    <span>Ron Weasley and Hermione Granger</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q6" 
                      value="b" 
                      checked={quizAnswers.q6 === 'b'} 
                      onChange={() => handleAnswerChange('q6', 'b')} 
                    />
                    <span>Neville Longbottom and Luna Lovegood</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q6" 
                      value="c" 
                      checked={quizAnswers.q6 === 'c'} 
                      onChange={() => handleAnswerChange('q6', 'c')} 
                    />
                    <span>Draco Malfoy and Ginny Weasley</span>
                  </label>
                </div>
              </div>
              
              <div className="quiz-question">
                <h3>7. How many books are in the main Harry Potter series?</h3>
                <div className="quiz-options">
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q7" 
                      value="a" 
                      checked={quizAnswers.q7 === 'a'} 
                      onChange={() => handleAnswerChange('q7', 'a')} 
                      required
                    />
                    <span>8</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q7" 
                      value="b" 
                      checked={quizAnswers.q7 === 'b'} 
                      onChange={() => handleAnswerChange('q7', 'b')} 
                    />
                    <span>7</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q7" 
                      value="c" 
                      checked={quizAnswers.q7 === 'c'} 
                      onChange={() => handleAnswerChange('q7', 'c')} 
                    />
                    <span>6</span>
                  </label>
                </div>
              </div>
              
              <div className="quiz-question">
                <h3>8. What is the famous platform at King's Cross Station where the Hogwarts Express departs?</h3>
                <div className="quiz-options">
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q8" 
                      value="a" 
                      checked={quizAnswers.q8 === 'a'} 
                      onChange={() => handleAnswerChange('q8', 'a')} 
                      required
                    />
                    <span>Platform 7½</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q8" 
                      value="b" 
                      checked={quizAnswers.q8 === 'b'} 
                      onChange={() => handleAnswerChange('q8', 'b')} 
                    />
                    <span>Platform 10¾</span>
                  </label>
                  <label className="quiz-option">
                    <input 
                      type="radio" 
                      name="q8" 
                      value="c" 
                      checked={quizAnswers.q8 === 'c'} 
                      onChange={() => handleAnswerChange('q8', 'c')} 
                    />
                    <span>Platform 9¾</span>
                  </label>
                </div>
              </div>
              
              <button type="submit" className="quiz-submit-btn">Submit Answers</button>
            </form>
          ) : (
            <div className="quiz-results">
              <h3>Your Score: {score} out of 8</h3>
              <p className="quiz-feedback">
                {score === 8 ? 
                  "Perfect! You're a true Harry Potter expert!" : 
                  score >= 6 ? 
                  "Great job! You know your Harry Potter very well!" :
                  score >= 4 ?
                  "Not bad! You have a good understanding of the Harry Potter universe." :
                  "It seems you might need to revisit the magical world of Harry Potter again!"}
              </p>
              <button onClick={resetQuiz} className="quiz-reset-btn">Try Again</button>
            </div>
          )}
        </div>
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Thank you for your attention!
        </p>
        <p>
          In conclusion, Harry Potter is much more than just a series of books and movies—it is a
          timeless story that continues to inspire and captivate people of all ages. Its themes of friendship,
          bravery, love, and the fight against injustice are universal and relevant to every generation. The
          magical world of Hogwarts offers an escape while also teaching valuable life lessons. Whether
          you're reading the books for the first time or revisiting them, Harry Potter reminds us that
          courage can be found in the most unlikely places and that love and kindness are the greatest
          forms of magic.
        </p>
      </section>
    </div>
  )
}

export default Content