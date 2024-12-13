import './Blog.css'
import Image from 'next/image'

export default function Blog(){
    return(
        <>
            <section className="blog-section">
                <h2 className='blog-title'>Latest Blog</h2>
                <article className='blog-content'>
                    <div className="article-wrapper">
                        <figure>
                            <Image src="/assets/BlogImages/image1.jpeg" alt=" Blog Image" width={416} height={255} className='BlogImage'/>
                        </figure>
                        <div className="article-body">
                            {/* <div className="article-details">

                            </div> */}
                            <p className='article-subheading'>Top esssential Trends in 2021
                            </p>
                            <p className='article-description'>Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam. </p>
                            <a href="#" className="read-more">
                            Read more 
                            </a>
                        </div>
                    </div>


                    <div className="article-wrapper">
                        <figure>
                            <Image src="/assets/BlogImages/image1.jpeg" alt=" Blog Image" width={416} height={255} className='BlogImage' />
                        </figure>
                        <div className="article-body">
                            {/* <div className="article-details">

                            </div> */}
                            <p className='article-subheading'>Top esssential Trends in 2021
                            </p>
                            <p className='article-description'>Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam. </p>
                            <a href="#" className="read-more">
                            Read more 
                            </a>
                        </div>
                    </div>


                    <div className="article-wrapper">
                        <figure>
                            <Image src="/assets/BlogImages/image1.jpeg" alt=" Blog Image" width={416} height={255} className='BlogImage' />
                        </figure>
                        <div className="article-body">
                            {/* <div className="article-details">

                            </div> */}
                            <p className='article-subheading'>Top esssential Trends in 2021
                            </p>
                            <p className='article-description'>Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam. </p>
                            <a href="#" className="read-more">
                            Read more 
                            </a>
                        </div>
                    </div>


                    
                </article>

                



                


            </section>
        </>
    )
}