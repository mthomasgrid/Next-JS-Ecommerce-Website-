import './NewsLetter.css'
import Image from 'next/image'
import Link from 'next/link'


export default function  NewsLetter(){

    return(
        
            <div className="newsletter-content">
                <Image src="/assets/BannerImages/Bg.png" alt="Background image" height={400} width={1510}/>
                <div className="center">
                    <h2>Get Latest Update By Subscribe <br /> 0ur Newsletter</h2>
                    <Link href="/products"><button className="btn-newsletter">Subscribe</button></Link>
                </div>
            </div>

        
    )
}