import React from 'react';
import './App.css';
import Button from './Button';
import Product from './Product';
import Section from './Section';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';

function App() {
  return (
      <>
        <header>

           <h1>Handbags & Purses</h1>

            <Button
                title="to the collection"
            />

            <Button
                title="shop all bags"
            />

            <Button
                title="pre-order"
            />

        </header>

          <main>
                  <Product
                  label="Best seller"
                  image={bag1}
                  description="bag_1"
                  title="The handy bag"
                  price= "€400,-"
                  />

                  <Product
                      label="Best seller"
                      image={bag2}
                      description="bag_2"
                      title="The stylish bag"
                      price= "€250,-"
                  />

                  <Product
                      label="New collection"
                      image={bag3}
                      description="bag_3"
                      title="The simple bag"
                      price= "€300,-"
                  />

                  <Product
                      label="Best seller"
                      image={bag4}
                      description="bag_4"
                      title="The trendy bag"
                      price= "€150,-"
                  />

          </main>

          <footer>
             <div>
                 <Section
                  title="The Brand"
                  paragraph1={"lorem ipsum dolor sit amet, consectetur adipisiving elit Alquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt."}
                  paragraph2={"lorem ipsum dolor sit amet, consectetur adipisiving elit Alquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt. "}
                 />

                 <Section
                  brand={brand}
                  brandtitle={ "Brand"}
                 />
             </div>
              <div>

                 <Section
                  brand={ourStory}
                  brandtitle={ "OUr Story"}
                 />

                 <Section
                  title="Our Story"
                  paragraph1={"lorem ipsum dolor sit amet, consectetur adipisiving elit Alquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt. At repellendus tenetur veniam!"}
                 />
              </div>
          </footer>
      </>
  );
}

export default App;



