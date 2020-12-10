import './index.css'
interface Locatconfig {
    location: String,
    dev: Boolean,
}
function Mainindex(props: Locatconfig) {
    return (
        <div className="Main-contain">
            主体
            <div className="boxsize">123</div>
        </div>
    )
}
export default Mainindex