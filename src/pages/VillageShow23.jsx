import PagePhoto from "../components/PagePhoto"
import ShowGallery23 from "../components/ShowGallery23"

export default function VillageShow23(){
    return(
        <main className="main">
            <section className="image-section">
                <PagePhoto
                    imageUrl="/images/heros/show-2023.jpg"
                    altText="Colourful flower displays in vases on a long table in a wood-panelled room. The displays are accompanied by information cards and some have red and yellow rosettes next to them. In the background is another table with displays of vegetables. The tables are draped with black cloths. some silver cups and shields are visible to the left in the background."
                />
            </section>
            <section className="main-information">
                <h2><span className="first-word-span">Ilketshall</span> St Margaret Village Show, Saturday 15th July 2023</h2>
                <p>
                    <span className="first-sentence-span">The weather forecast leading up to the Show was looking grim</span> and we were anticipating gales and rain. Miraculously, we escaped the news media hype and experienced a most wonderful, sunny day within the sheltered grounds of the village hall.
                </p>
                <p>
                We attracted exhibitors and visitors far and wide. As usual, the village hall was at full capacity, resulting in a wonderful display from the Vegetables, Cooking & Homecraft, Flowers, Handicraft and Photography classes. Outside, as well as numerous stalls, we were entertained by the wonderful Rumburgh Morris Dancers, the engaging Animus Puppetry, along with a display from the Bungay Taekwon-Do club. The BBQ, Beer & Tea tents worked hard to keep the 200 or so vistors fed and watered and were kept busy as usual right to the very end. Coupled with entertaining commentary from our new President Alec McCluskey, the eagerly anticipated Spud Bucket weigh-in didn’t disappoint with a record number of 40 entries. To end it all, High Street won 2-1 in the keenly contested Tug of War against Low Street - underfoot, a very slippery outcome! 
                </p>
                <p>
                In all, there were 56 exhibitors and  207 exhibits, raising well over £1200 (?) for the village hall funds. The standard of entries across all classes was excellent and attracted much praise from the judges and visiting public alike. The committee would also like to thank everyone who volunteered to help make this event a success and the local business that contributed to the great raffle prizes. Have a great summer!
                </p>
                <p>
                <span className="italic">Report by Show Secretary, Roger Webb</span>
                </p>
                <h2 className="results-h2">Results</h2>
                <p className="show-result">Tomkin Plate (most points in show): <span className="winner-name">Jane Gardner</span></p>
                <p className="show-result">Stott Trophy (second most points in show): <span className="winner-name">Annette Abbott</span></p>
                <p className="show-result">Fuller Cup (most points for fruit): <span className="winner-name">Daphne Todd</span></p>
                <p className="show-result">Read Cup (most points for vegetables): <span className="winner-name">Roger Webb</span></p>
                <p className="show-result">Val Chapman Cup (best horticultural exhibit): <span className="winner-name">Sheila Cooper</span></p>
                <p className="show-result">Masher Trophy (heaviest weight of bucket potatoes): <span className="winner-name">Jon Lewis</span></p>
                <p className="show-result">Cannel Cup (most points for flowers): <span className="winner-name">Annette Abbott</span></p>
                <p className="show-result">Mann Cup (most points for cookery & home produce): <span className="winner-name">Jane Gardner</span></p>
                <p className="show-result">Smith Howell Cup (most points ladies' handicrafts): <span className="winner-name">Ross Hammond</span></p>
                <p className="show-result">Huguenot Cup (most points mens' handicrafts): <span className="winner-name">Charlie Deakin</span></p>
                <p className="show-result">John Arthey Cup (best photograph): <span className="winner-name">Jane Gardner / Rob Hardman / Anthony Abbott</span></p>
                <p className="show-result">Rogers Trophy (most points for floral art): <span className="winner-name">Sheila Cooper / Sarah Reeve</span></p>
                <p className="show-result">Alison Morgan Cup (finest floral exhibit): <span className="winner-name">Annette Abbott</span></p>
                <p className="show-result">The Wigg Cup (most points in farmers class): <span className="winner-name">Emma Hald</span></p>
                <p className="show-result">Roger Lambert Memorial Shield (best garden display): <span className="winner-name">Andrew Slate</span></p>
                <p className="show-result">Founders Award (most points for a novice): <span className="winner-name">Sarah McCluskey</span></p>
                <p className="show-result">Family Cup (family who have contributed most to the show): <span className="winner-name">Jane & Paul Gardner</span></p>
  
            </section>
            <section className="main-information">
                <h2><span className="first-word-span">Village</span> Show Gallery</h2>
                <p>
                    <span className="first-sentence-span">Memorable moments from Saturday 15th July 2023</span>
                </p>
                <p>
                    Memories of the Show are captured in our photo gallery below:
                </p>
            </section>
            <ShowGallery23 />
        </main>
    )
}