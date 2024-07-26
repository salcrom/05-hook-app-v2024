import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { LoadingQuote } from "./LoadingQuote";
import { PokemnonCard } from "./PokemonCard";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    // const { counter, decrement, increment } = useCounter(1);
    const { counter, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(
        // `https://pokeapi.co/api/v2/pokemon/${counter}`
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    );
    const { author, quote } = !!data && data[0];

    return (
        <>
            {/* <h1>Información de Pokémon</h1> */}
            <h1>BreakingBad Quotes</h1>
            <hr />

            {isLoading ? (
                // <LoadingMessage />
                <LoadingQuote />
            ) : (
                // <PokemnonCard
                //     id={counter}
                //     name={data.name}
                //     sprites={[
                //         data.sprites.front_default,
                //         data.sprites.front_shiny,
                //         data.sprites.back_default,
                //         data.sprites.back_shiny,
                //     ]}
                // />
                <Quote author={author} quote={quote} />
            )}

            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* <h2>{data?.name}</h2> */}

            <button
                // className="btn btn-primary mt-2"
                className="btn btn-primary"
                disabled={isLoading}
                // onClick={() => (counter > 1 ? decrement() : null)}
                onClick={() => increment()}
            >
                {/* Siguiente */}
                Next quote
            </button>

            <button className="btn btn-primary mt-2" onClick={increment}>
                Siguiente
            </button>
        </>
    );
};
