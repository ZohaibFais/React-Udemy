import { useState } from "react";
import "./App.css";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";
//

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx','props','state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log("App button executing");
  return (
    <>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>

            {/* automatic access using map  */}

            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title}{...conceptItem}/>)} 
            
            
            {/* manual access */}
            
            {/* <CoreConcept //props directly
              title="Components"
              description="The core UI building block."
              image={componentImg}
            />
            <CoreConcept //prop method2 creating an array in a new file and then importing it
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />

            <CoreConcept //alternate shorter method when object property name === prop name
              {...CORE_CONCEPTS[3]}
            /> */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton               
            isSelected={selectedTopic === 'jsx'} 
            onSelect={() => handleSelect("jsx")}
            >
            JSX
            </TabButton>
          
            <TabButton              
             isSelected={selectedTopic === 'props'} 
             onSelect={() => handleSelect("props")}
             >
              Props
            </TabButton>
            <TabButton              
             isSelected={selectedTopic === 'state'}
             onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>

          </menu>
          {!selectedTopic ? 
            (<p> Please select a topic.</p>)
            : 
            (
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
              </div>
            )}
        </section>
      </main>
    </>
  );
}

export default App;
