import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ErrorPage from "./Components/ErrorPage";
import Form from "./Components/ContactForm";
import ProfileData from "./Components/ProfilePage";
import Product from "./Product";
import ProductDetail from "./Components/ProductDetails";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const [{}, dispatch] = useStateValue();
  const [{ user }] = useStateValue();

  const style = {
    'fontWeight': "800",
    'color': "white",
    'textAlign': "center",
    'padding-bottom': "10px",
    'border-bottom': "2px solid rgb(79, 98, 148)",
    'width':"50%",
    'margin':"10px auto",
  }

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
    <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>

      {!user? <Route exact path="/">
          <Header />
          <Home/>
          <Form/>
        </Route>: <Route exact path="/">
          <Header />
          <ProfileData/>
          <div className="home">
          <div className="home__container">
            <h2 style={style}>Productos</h2>
            <div className="home__row">
              <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
              />
              <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id="4903850"
                title="Fitbit Charge 5 Advanced Fitness"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
              />
              <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
              />
              <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
              />
            </div>

            <div className="home__row">
              <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
              />
            </div>
          </div>
          </div>
        </Route>
        }
        <Route path={"/productDetails"}>
          <Header/>
            <ProductDetail 
              id={1}
              image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' 
              rating={5} 
              price={11.96} 
              title={'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'}
              info={'Most startups fail But many of those failures are preventable. The Lean Startup is a new approach being adopted across the globe, changing the way companies are built and new products are launched' 
              +'Eric Ries defines a startup as an organization dedicated to creating something new under conditions of extreme uncertainty. This is just as true for one person in a garage or a group of seasoned professionals in a Fortune 500 boardroom. What they have in common is a mission to penetrate that fog of uncertainty to discover a successful path to a sustainable business'
              +'The Lean Startup approach fosters companies that are both more capital efficient and that leverage human creativity more effectively. Inspired by lessons from lean manufacturing, it relies on “validated learning,” rapid scientific experimentation, as well as a number of counter-intuitive practices that shorten product development cycles, measure actual progress without'
              +'resorting to vanity metrics, and learn what customers really want. It enables a company to shift directions with agility, altering plans inch by inch, minute by minute. Rather than wasting time creating elaborate business plans, The Lean Startup offers entrepreneurs—in companies of all sizes—a way to test their vision continuously, to adapt and adjust before it’s too late'
              +'Ries provides a scientific approach to creating and managing successful startups in a age when companies need to innovate more than ever.'}
            />
            <ProductDetail 
              id={2}
              image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg' 
              rating={4} 
              price={239.0} 
              title={'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'}
              info={'STYLE AND RELIABILITY: For those that love baking, the Kenwood kMix stand mixer with stylish glass bowl offers a stylish blend of colour, retro design and classic Kenwood reliability'
              +'NON-STICK BAKING: A full set of non-stick baking tools including the K-beater, balloon whisk and the dough hook, making baking bread and mixing cake batter, easy and stress free'
              +'UNIQUE FOLD FUNCTION: Alongside the 5L glass mixing bowl is a 1000w motor, planetary mixing action for a good mix, unique fold function helps you create the most delicate mixes like brioche'
              +'OPTIONAL ATTACHMENTS: With over 10 optional attachments you can do more in the kitchen like pasta rolling and meat grinding, protect your kitchen sides with the supplied splash guard'
              +'EASY CLEAN UP: Mixer with baking tools are dishwasher safe for quick and easy cleaning'}
            />
            <ProductDetail 
              id={3}
              image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg' 
              rating={3} 
              price={199.0} 
              title={'Fitbit Charge 5 Advanced Fitness'}
              info={'Optimiza tu rutina de entrenamiento con una puntuación de preparación diaria que revela si estás listo para hacer ejercicio o si debes centrarte en la recuperación (requiere membresía Fitbit Premium). Tamaño de la correa: S: se adapta a muñecas de 5.1 a 6.7 pulgadas de circunferencia. L: se adapta a muñecas de 6.7 a 8.3 pulgadas de circunferencia'
              +' .Obtén una puntuación diaria de gestión del estrés que muestra la respuesta de tu cuerpo al estrés y toma medidas para mejorar tus niveles con una sesión de atención plena con sensor EDA en la muñeca'
              +'Con el tablero de estadísticas de salud, rastrea el SpO2, variabilidad de frecuencia cardíaca, variación de temperatura de la piel y más (no está diseñado para diagnosticar o tratar ninguna condición médica y no debe confiarse para ningún propósito médico. Está destinado a proporcionar información que pueda ayudarte a gestionar tu bienestar'
              +'Mira tu ritmo y distancia en tiempo real sin tu teléfono utilizando GPS integrado durante la actividad al aire libre, luego ve un mapa de tu ruta de entrenamiento en la aplicación Fitbit '}
            />
            <ProductDetail 
              id={4}
              image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' 
              rating={4} 
              price={98.99} 
              title={'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'}
              info={'Conoce el Echo Dot - Nuestro parlante inteligente más popular. Ahora con un diseño de tela compacto que se acomoda a cualquier lugar y mejor sonido. Control de voz para tu música- Reproduce canciones desde Amazon Music, Apple Music, Spotify, Sirius XM, y otros. También puedes escuchar audiolibros de Audible. '
              +'Lista para ayudarte- Pídele a Alexa que reproduzca música, conteste preguntas, lea las noticias, revise el pronóstico del tiempo, configure alarmas, controle los dispositivos domésticos inteligentes compatibles, y mucho más. '
              +'Controla tu Smart Home con tu voz - Enciende las luces, ajusta los termostatos, cierra puertas y más con los dispositivos compatibles conectados. '}
            />
            <ProductDetail 
              id={5}
              image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' 
              rating={4} 
              price={598.99} 
              title={'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'}
              info={'Este producto de segunda mano ha sido inspeccionado, probado y limpiado profesionalmente por proveedores calificados de Amazon. No está certificado por Apple.' 
              +'Este producto se encuentra en “excelente estado”. La pantalla y la carcasa no muestran signos de daños estéticos visibles a 12 pulgadas de distancia.' 
              +'Este producto tendrá una batería que supera el 80% de capacidad con respecto a una batería nueva.' 
              +'Es posible que los accesorios no sean originales, pero serán compatibles y totalmente funcionales. El producto puede venir en una caja genérica. '}
            />
            <ProductDetail 
              id={6}
              image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' 
              rating={4} 
              price={1094.98} 
              title={'Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440'}
              info={'49 inch dual QHD curved gaming monitor, the equivalent of dual 27 inch QHD displays side-by-side' 
              +'120Hz refresh rate with AMD Free Sync 2 technology for crisp HDR content display, reduced input latency, low frame rate compensation' 
              +'HDR1000 Supports a peak brightness rating of 1,000 nits for true high Dynamic Range' 
              +'Super ultra wide 32: 9 (5120x1440) aspect ratio helps the CRG9 curve around your field of view for immersive gaming action ' 
              +'Connect multiple input sources with HDMI, 2 DisplayPort and USB 3.0 connections ' 
              +'Height-adjustable stand which also tilts and swivels for maximum comfort '}
            />
          </Route> 
        <Route path="/*">
          <Header/>
          <ErrorPage />
        </Route>   
      </Switch>
    </BrowserRouter>
  );
}

export default App;
