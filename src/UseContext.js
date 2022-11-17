import React from "react";

import { themeContext } from "./Context";
import { useContext, useState } from "react";

const Card = ({children}) => {
    const { theme, toggleTheme } = useContext(themeContext);

    return(
        <section className={theme === 'light' ? "card-container light" : "card-container dark"}>
            <h1 onClick={toggleTheme}>
                Heading
            </h1>
                {children}
        </section>
    );
}

export const ContextConsumer = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    

    return (
            <div>
                <themeContext.Provider value={{theme, toggleTheme}}>
                    <Card>
                        <p>I'm the first card's child</p>
                        <p>Voluptate aliqua elit sunt mollit ea fugiat reprehenderit irure. Lorem irure incididunt ex veniam sint nostrud velit non qui ut cupidatat. 
                        Cupidatat proident amet tempor id sit cillum commodo fugiat pariatur enim. Mollit nostrud aute nisi reprehenderit Lorem ipsum non ullamco occaecat tempor in. 
                        Adipisicing velit tempor irure labore ad anim.</p>
                    </Card>
                    <Card/>
                </themeContext.Provider>
            </div>
    );
}