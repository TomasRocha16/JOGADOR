<ul className ="divide-y divide-gray-200">
 allPosts.map((post)) => {
 return (
    <li key={post.id} className= "py-12">
        <article className="space-y-2 xl.grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <dl>
                <dt className="sr-only"> Published on </dt>
                <dd className="text-base leading-6 font-medium text-gray-500">
                    <time dateTime={post.date}>
                        {new Date(post.date).tolocalDateString ('pt-PT', {
                            year: 'numeric' , 
                            month: 'short' ,
                            day: 'numeric'
                        })}
                        </time>
                    </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                        <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                            href={`/posts/${post.slug}`}
                            className="text-gray-900"
                            >
                                {post.excerpt && (
                                    <div className= "prose max-w-none text-gray-500">
                                        {post.excerpt}
                                        </div>
                                )}
                                </div>
                                <div className="text-base leading-6 font-medium">
                                    <Link   
                                    href={`/posts/${post.slug}`}
                                    className="text-purple-500 hover:text-purple-600"
                                    arial-label={'Read "${post.title}"'}
                                    >
                                        Ler Mais &rarr;
                                        </Link>
                                        </div>
                                        </div>
                                        </article>
                                        </li>
                                    )
                                  })}
                                </ul>