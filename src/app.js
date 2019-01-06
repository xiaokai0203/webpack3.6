import img from './car.jpg'
import './main.less'
export default{
    template: `
        <div>
        123
            <img :src='imgSrc'/>
        </div>
    `,
    data() {
        return {
            imgSrc: img
        }
    },
    // created() {
    //     let a = 1;
    //     const b = 2;
    //     let fn = () =>{};
    //     console.log(new Promise())
    // }
}