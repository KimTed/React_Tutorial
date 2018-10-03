let secondsLeft = 5,
    interval = setInterval(() => {
        if (secondsLeft === 0) {
            ReactDOM.render(
                <div>
                    Note was removed after {secondsLeft} seconds.
                </div>,
                document.getElementById('content')
            );

            clearInterval(interval);
        } else
            ReactDOM.render(
                <div>
                    <Note secondsLeft = {secondsLeft}/>
                </div>,
                document.getElementById('content')
            );

        secondsLeft--;
    }, 1 * 1000);