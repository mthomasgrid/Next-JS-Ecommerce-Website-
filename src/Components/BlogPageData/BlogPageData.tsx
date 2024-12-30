import Image from 'next/image';
import Link from 'next/link';



interface BlogData {
    id: number;
    title: string;
    author: string;
    date_published: string;
    content: string;
}

export default async function BlogPage(){
    try {
        const response = await fetch('https://dummyapi.online/api/blogposts');
        let blogDatas: BlogData[] = []; 
        blogDatas = await response.json();
        
    
        return (
            <>
    
           
              <section className="blog-section">
                <h2 className="blog-title">Latest Blog</h2>
                <article className="blog-content">
                  {blogDatas.slice(0,13).map((blogData) => (
                    <div className="article-wrapper" key={blogData.id}>
                      <figure>
                        <Image
                          src="/assets/BlogImages/image1.jpeg"
                          alt="Blog Image"
                          width={416}
                          height={255}
                          className="BlogImage"
                        />
                      </figure>
    
                        <div className="article-users">
                            <div className="users-name">
                            <Image src="/icons/pen.svg" alt='author-name' width={16} height={16} className='author-logo'/>
                                {blogData.author}
                            </div>
                            <div className="users-name">
                              <Image src="/icons/calendar.svg" alt='author-name' width={16} height={16} className='author-logo'/ >
                              {blogData.date_published}</div>
                        </div>
    
    
    
                      <div className="article-body">
                        <p className="article-subheading">{blogData.title}</p>
                        <p className="article-description">
                          {blogData.content.substring(0, 120)}.
                        </p>
                       
                      </div>
                      <Link href="/" className="read-more">
                          Read more
                        </Link>
                    </div>
                  ))}
                </article>
              </section>
              
            </>
          );
    
    
    
    
      } 
      catch (e) {
        console.error(e);
      }
    
}