export default function Greeting({name = 'World', children}) {
    return(
    <>
    <h1>Hello {name}</h1>
    {children}
    </>
    )
}