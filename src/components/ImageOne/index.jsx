import { Parallax,  } from 'react-parallax';
import nikeShoes from '../../image/img3.jpg'
const Container = () => (
    <Parallax
        
        bgImage={nikeShoes}
        bgImageAlt="nike shoes"
        strength={-200}
    >
        
        <div style={{ minHeight: '100vh' ,width:'100%'}} />
    </Parallax>
);

export default Container