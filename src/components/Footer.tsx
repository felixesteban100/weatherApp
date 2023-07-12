
function Footer() {
    return (
        <footer className="footer footer-center p-4 bg-base-300 text-base-content h-[9.3vh]">
            <div>
                <p>Copyright © 2023 - All right reserved by Felix Monegro</p>
                <div className="flex items-center justify-center gap-2">
                    <p>Powered by </p>
                    <img className="h-8" src="https://d4.alternativeto.net/-2L-W4Hbr6sYJg01ShaqrY3zZRAda9K94OMwr7ih3UI/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy9vcGVud2VhdGhlcm1hcF8yMDY4NTIucG5n.png" alt="openweather" />
                    <p>Open Weather API </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer