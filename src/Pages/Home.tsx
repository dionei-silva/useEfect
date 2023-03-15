import { countReset } from "console";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
    const [count, setCount] = useState(0);

    const clique1 = () => setCount(count + 1);

    // useEfect sem dependencia!

    useEffect(() => {
        console.log("apresenta a cada renderização");
    }, []);

    // useEfect com dependencia de array

    /* useEffect(() => {
        console.log("apresenta só quando clicar");
        document.title = `Você clicou ${count} Vezes`;
    }, [count]); */

    return (
        <>
            <div>
                <p>Você clicou {count} vezes</p>
                <button type="button" onClick={clique1}>
                    Clique aqui
                </button>
            </div>
        </>
    );
};

export default Home;
