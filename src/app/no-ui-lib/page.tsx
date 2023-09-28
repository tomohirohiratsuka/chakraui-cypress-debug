const NoUILibPageClient = () => {
    const buttons = [...Array.from({length: 1000}, (_, i) => i + 1)]
    return (
        <div>
            <h1>NoUILibPageClient</h1>
            {buttons.map((button, index) => (
                <button data-test={`button${button}`} key={button}>
                    button{button}
                </button>
            ))}
        </div>
    );
}

export default NoUILibPageClient;