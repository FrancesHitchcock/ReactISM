import PagePhoto from "../components/PagePhoto"
import ShowGallery from "../components/ShowGallery"

export default function VillageShow(){
    return(
        <main className="main">
            <section className="image-section">
                <PagePhoto
                    imageUrl="/images/village-show.jpg"
                    altText="Entry to the village maked with a road sign displaying the name 'Ilketshall St Margaret' and a 30mph speed limit sign. The surrounding scenery comprises a green arable field and mature deciduous trees in full leaf. The top of the church tower can be seen in the background."
                />
            </section>
            <section className="main-information">
                <h2><span className="first-word-span">Flower</span> Show</h2>
                <p>
                    <span className="first-sentence-span">A major event in the Ilketshall St Margaret calendar</span> usually held on the third Saturday in the month of July, the village hall houses over 200 exhibits of locally grown vegetables, fruit and flowers exhibited under the expert eye of specialist judges. Handicrafts, cooking and photography are also included in the competitions. There are cups and trophies to be won for all classes, which are keenly contested. The most recent and popular addition is the Potato in a Bucket, the aim of which is to encourage people to grow something - the weigh-in is always a guaranteed crowd attraction!
                </p>
                <p>
                    Whilst the produce forms the focal point of the Show, the Fete provides a first-class afternoon out for all the family. Bouncy Castle and other side-shows attract children and adults of all ages.
                </p>
                <p>
                    The Show aims to encourage as many of the community as possible to participate, and compete, in Growing, Baking and Making! Most importantly, the Show exists so that everyone can have a fun, family day out and at the same time, raising funds for the Village Hall. Long may it continue!
                </p>
                <p>
                     Click the link to see the <a href="/flyers/schedule-2023.pdf" target="_blank">2023 Show Schedule</a>
                </p>
            </section>

            <section className="main-information">
                <h2><span className="first-word-span">History</span> of the Show</h2>
                <p>
                    <span className="first-sentence-span">The Flower & Produce Show first started in 1947,</span> just after the Second World War to encourage improvement in horticultural practice and self-sufficiency throughout the rural community.
                </p>
                <p>
                    Since that time, the Show has diversified into areas such as Handicraft, Photography and Tug Of War. The add on Fete has expanded with colourful stalls, games and sideshows.
                </p>
                <figure className="main-figure">
                    <img src="/showHistory/flower-show-1950.jpg" alt="Flower Show at the Village Hall from the 1950s/60s"/>
                    <figcaption>
                        Flower Show at the Village Hall from the 1950s/60s - Reverend Green, his wife and two children. The other lady in the hat is Mrs Scase, wife of the man who started the show with Mr Cannell. The lady pouring the tea is Jean Thrower whose parents kept the pub in the village.
                    </figcaption>
                </figure>
                <figure className="main-figure">
                    <img src="/showHistory/flower-show-1970-B.jpg" alt="Flower Show at the Village Hall 1970"/>
                    <figcaption>
                        Nostalgic newspaper cuttings from The Lowestoft Journal, Friday July 24, 1970: Visitors admire the floral display
                    </figcaption>
                </figure>
                <figure className="main-figure">
                    <img src="/showHistory/flower-show-1970-C.jpg" alt="Flower Show at the Village Hall 1970"/>
                    <figcaption>
                        Mr Charles Rogers holding his steer for the weight-judging contest at Ilketshall St Margaret & District Flower Show. His brother, Mr John Rogers was chairman of the committee for the first time. On the left is Mr H J Minister, winner of the Norman Challenge Trophy for most points for vegetables. 
                    </figcaption>
                </figure>
            </section>

            <section className="main-information">
                <h2><span className="first-word-span">Village</span> Show Gallery</h2>
                <p>
                    <span className="first-sentence-span">Memorable moments from Saturday 16th July 2022</span>
                </p>
                <p>
                     Click the link to see the report on the <a href="/flyers/flower-show-report-2022.pdf" target="_blank">2022 Ilketshall St Margaret Village Show.</a>
                </p>
                <p>
                    Memories of the Show are captured in our photo gallery below:
                </p>
            </section>
            <ShowGallery />
        </main>
    )
}