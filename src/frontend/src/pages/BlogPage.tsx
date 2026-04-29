import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronDown, ChevronUp, Tag } from "lucide-react";
import { useState } from "react";
import type { PageType } from "../App";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  fullContent: string;
  image: string;
  link: string;
}

// Exact posts from vampoly.com/blog.php in exact order
const posts: BlogPost[] = [
  {
    id: 1,
    title: "Why PU Bumpers Are Safer Choices in High-Impact Zones",
    date: "7 March 2026",
    category: "Why PU Bumpers Are Safer Choices in High-Impact Zones",
    excerpt:
      "In today's fast-moving industrial environments, even a minor collision at 5–10 km/h can result in costly damage to infrastructure, machinery, or vehicles.",
    fullContent:
      "In today's fast-moving industrial environments, even a minor collision at 5–10 km/h can result in costly damage to infrastructure, machinery, or vehicles. Polyurethane bumpers provide superior impact absorption compared to rubber or metal alternatives. The elastomeric properties of PU allow it to deform under impact and return to its original shape, absorbing energy that would otherwise be transmitted to the structure or vehicle. This makes PU bumpers ideal for loading docks, warehouse aisles, parking barriers, and any high-traffic industrial area where collisions are likely. The material's resistance to oils, fuels, and chemicals also ensures durability in harsh industrial environments, while its quieter impact characteristics reduce noise pollution in working areas.",
    image: "https://www.vampoly.com/images/blog/vampolyblog2.jpeg",
    link: "https://www.vampoly.com/why-pu-bumpers-are-safer-choices-in-high-impact-zones.php",
  },
  {
    id: 2,
    title: "Selecting the Right PU Wheel for Heavy-Duty Material Handling",
    date: "5 March 2026",
    category: "Selecting the Right PU Wheel for Heavy-Duty Material Handling",
    excerpt:
      "In industries where tons of materials move every day—like manufacturing, warehousing, logistics, and construction—choosing the right wheel is not just important, it's critical.",
    fullContent:
      "In industries where tons of materials move every day—like manufacturing, warehousing, logistics, and construction—choosing the right wheel is not just important, it's critical. Polyurethane wheels offer an outstanding combination of load-bearing capacity, wear resistance, and floor protection that makes them superior to rubber or nylon alternatives in most heavy-duty applications. When selecting PU wheels, consider the load rating, wheel diameter, hardness (Shore A scale), and the type of floor surface. Harder compounds (85A–95A) handle heavy loads and abrasion better, while softer compounds (70A–80A) provide better floor protection and grip. The tread pattern also matters — flat treads distribute load evenly, while crowned treads help in cornering. VAM POLY PLAST manufactures custom PU wheels tailored to specific industrial requirements.",
    image: "https://www.vampoly.com/images/blog/vampolyblog1.jpeg",
    link: "https://www.vampoly.com/selecting-the-right-pu-wheel-for-heavy-duty-material-handling.php",
  },
  {
    id: 3,
    title: "Case Study: Enhancing Conveyor Life with PU Coated Rollers",
    date: "14 Feb 2026",
    category: "Case Study: Enhancing Conveyor Life with PU Coated Rollers",
    excerpt:
      "Conveyor systems are the backbone of material movement in industries such as mining, cement, power plants, steel, and bulk material handling",
    fullContent:
      "Conveyor systems are the backbone of material movement in industries such as mining, cement, power plants, steel, and bulk material handling. In this case study, a major bulk material handling facility was experiencing frequent conveyor roller failures due to the highly abrasive nature of the materials being transported. After switching to polyurethane coated rollers from VAM POLY PLAST, the average roller lifespan increased dramatically. The smooth PU surface also reduced friction between the belt and rollers, resulting in lower energy consumption. Maintenance intervals were extended significantly, and the overall cost of ownership dropped substantially over a three-year period. The success of this implementation has led to a company-wide rollout of PU coated rollers across all their conveyor systems.",
    image:
      "https://www.vampoly.com/images/blog/case-study-enhancing-conveyor-life-with-pu-coated-rollers.jpeg",
    link: "https://www.vampoly.com/case-study-enhancing-conveyor-life-with-pu-coated-rollers.php",
  },
  {
    id: 4,
    title: "Top 5 Applications of PU Hydrocyclones in Mineral Processing",
    date: "1 Feb 2026",
    category: "Top 5 Applications of PU Hydrocyclones in Mineral Processing",
    excerpt:
      "In today's mineral processing industry, efficiency, durability, and cost control are more important than ever.",
    fullContent:
      "In today's mineral processing industry, efficiency, durability, and cost control are more important than ever. Polyurethane hydrocyclones have become the preferred choice over metal equivalents due to their superior wear resistance, lighter weight, and lower total cost of ownership. The top 5 applications include: 1. Coal Washing Plants — PU hydrocyclones excel in dense medium cyclone applications. 2. Iron Ore Processing — lightweight PU construction makes installation and maintenance easier while providing excellent resistance to abrasive iron ore slurries. 3. Gold Mining Operations — ideal for classification in gold processing circuits with smooth internal surfaces. 4. Phosphate Processing — chemical resistance makes these cyclones perfect for acidic conditions. 5. Sand and Gravel Classification — consistent particle size classification with minimal wear for high-volume operations.",
    image:
      "https://www.vampoly.com/images/blog/top-5-applications-of-pu-hydrocyclones-in-mineral-processing.jpeg",
    link: "https://www.vampoly.com/top-5-applications-of-pu-hydrocyclones-in-mineral-processing.php",
  },
  {
    id: 5,
    title: "Why HYDROCYCLONES Made of PU Outperform Traditional Materials",
    date: "10 Jan 2026",
    category: "Why PU Hydrocyclones Outperform Traditional Materials",
    excerpt:
      "we understand that in industries like mining and mineral processing, equipment performance directly affects productivity and operating costs. One of the most critical components in these processes is the hydrocyclone.",
    fullContent:
      "We understand that in industries like mining and mineral processing, equipment performance directly affects productivity and operating costs. One of the most critical components in these processes is the hydrocyclone. Wear Resistance: PU hydrocyclones demonstrate wear rates 5–10 times lower than steel equivalents when handling abrasive slurries. The elastomeric nature of polyurethane allows it to absorb impacts rather than being worn away. Weight Advantage: PU components are significantly lighter than their metal counterparts, reducing structural support requirements and making maintenance operations safer and more efficient. Chemical Resistance: Modern polyurethane formulations offer excellent resistance to acids, alkalis, and oils commonly encountered in mineral processing environments. Noise Reduction: The sound-dampening properties of polyurethane result in measurably quieter operations, contributing to improved workplace conditions. Cost-Effectiveness: While initial investment may be comparable, the extended service life of PU hydrocyclones translates to lower total cost of ownership.",
    image:
      "https://www.vampoly.com/images/blog/why-hydrocyclones-made-of-pu-traditonal-materials.jpeg",
    link: "https://www.vampoly.com/why-hydrocyclones-made-of-pu-traditonal-materials.php",
  },
  {
    id: 6,
    title: "How PU Rollers Improve Conveyor Efficiency and Reduce Downtime",
    date: "02 Jan 2026",
    category: "How PU Rollers Improve Conveyor Efficiency",
    excerpt:
      "Conveyor systems are the backbone of industries such as cement, mining, steel, and bulk material handling. When conveyor rollers fail, it leads to production delays, increased maintenance costs, and unexpected downtime.",
    fullContent:
      "Conveyor systems are the backbone of industries such as cement, mining, steel, and bulk material handling. When conveyor rollers fail, it leads to production delays, increased maintenance costs, and unexpected downtime. Polyurethane rollers address these challenges directly. Reduced Noise and Vibration: PU rollers absorb vibration and reduce operational noise by up to 50% compared to steel rollers. Improved Belt Tracking: The slightly higher friction coefficient of PU surfaces helps maintain proper belt alignment, reducing the risk of belt wander and potential spillage. Self-Cleaning Properties: The elastic deformation of PU rollers as they rotate helps dislodge sticky materials that would otherwise accumulate on steel rollers. Corrosion Resistance: Unlike steel rollers, PU rollers do not rust or corrode, making them ideal for outdoor applications or environments with high moisture content. Extended Service Life: PU rollers typically last 3–5 times longer than steel rollers in abrasive applications.",
    image:
      "https://www.vampoly.com/images/blog/how-pu-rollers-improve-conveyor-efficiency-and-reduce-downtime.jpeg",
    link: "https://www.vampoly.com/how-pu-rollers-improve-conveyor-efficiency-and-reduce-downtime.php",
  },
  {
    id: 7,
    title: "Why Polyurethane Screen Panels Are the Game Changer in Mining",
    date: "24 Dec 2025",
    category: "Polyurethane Screen Panels for Mining",
    excerpt:
      "The mining industry depends heavily on efficient screening systems to separate materials accurately and maintain smooth operations. Traditional screen panels like wire mesh and rubber panels have been used for years, but they often fail.",
    fullContent:
      "The mining industry depends heavily on efficient screening systems to separate materials accurately and maintain smooth operations. Traditional screen panels like wire mesh and rubber panels have been used for years, but they often fail under demanding conditions. Aperture Stability: Unlike wire mesh, PU screen panels maintain consistent aperture sizes throughout their service life, ensuring accurate particle size classification. Near-Mesh Particle Handling: The flexibility of PU panels prevents near-mesh particles from becoming lodged in apertures, reducing blinding and maintaining screening efficiency. Impact Resistance: PU panels absorb high-impact loads without fracturing, making them suitable for processing large, heavy feed materials. Chemical Compatibility: Polyurethane is resistant to most chemicals encountered in mining operations. Modular Design: The modular nature of PU screen panels allows for easy replacement of individual panels without taking the entire screen out of service, minimizing production losses during maintenance.",
    image:
      "https://www.vampoly.com/images/blog/why-pourethane-screen-panels-are-the-game-changer-in-mining.jpeg",
    link: "https://www.vampoly.com/why-polyurethane-screen-panels-are-the-game%E2%80%91changer-in-mining.php",
  },
  {
    id: 8,
    title: "Case Study: Enhancing Conveyor Life with PU Coated Rollers",
    date: "14 Dec 2025",
    category: "PU Coated Rollers",
    excerpt:
      "In many industrial environments, conveyor systems play a critical role in daily operations. From manufacturing units to logistics hubs, conveyors ensure smooth material movement and consistent productivity.",
    fullContent:
      "In many industrial environments, conveyor systems play a critical role in daily operations. From manufacturing units to logistics hubs, conveyors ensure smooth material movement and consistent productivity. This case study details the implementation of PU coated rollers at five industrial sites. Site 1 – Cement Plant: Rollers handling raw material transport showed 250% lifespan improvement over standard steel rollers. The reduced dust generation from PU surfaces also improved housekeeping conditions. Site 2 – Steel Works: In the high-temperature environment of steel processing, specially formulated high-temperature PU rollers maintained performance where rubber alternatives had previously failed. Site 3 – Fertilizer Plant: The chemical-resistant PU coating proved essential in this corrosive environment, with roller life extending from 4 months to over 18 months. Site 4 – Port Operations: Salt water exposure and heavy loading conditions were handled effectively by PU rollers, with significant reduction in maintenance crew requirements.",
    image: "https://www.vampoly.com/images/blog/vampolyblog.jpeg",
    link: "https://www.vampoly.com/case-study-enhancing-conveyor-life-with-PU-coated-rollers.php",
  },
  {
    id: 9,
    title:
      "Cost‑Benefit Analysis: PU vs Traditional Materials in Industrial Parts",
    date: "07 Dec 2025",
    category: "Industrial Parts",
    excerpt:
      "Choosing the right material for industrial parts is a critical decision for manufacturers. The material directly affects performance, durability, maintenance costs, and overall return on investment.",
    fullContent:
      "Choosing the right material for industrial parts is a critical decision for manufacturers. The material directly affects performance, durability, maintenance costs, and overall return on investment. Initial Cost Comparison: PU components typically cost 10–30% more than equivalent steel components. However, initial cost represents only a fraction of the total ownership equation. Service Life: In abrasive applications, PU components routinely last 3–8 times longer than steel equivalents, fundamentally changing the economics of ownership. Maintenance Costs: The extended service intervals of PU components translate directly to reduced labor costs and lower consumption of spare parts inventory. Energy Efficiency: The lower friction characteristics of PU surfaces reduce drive motor energy consumption by 5–15% in conveyor and processing applications. Downtime Reduction: Longer service intervals and easier maintenance procedures result in fewer planned and unplanned production stoppages. Environmental Impact: The extended lifecycle of PU components means fewer replacements, reducing raw material consumption and waste generation.",
    image: "https://www.vampoly.com/images/blog/vampolyblogs.jpeg",
    link: "https://www.vampoly.com/cost-benefit-analysis-pu-vs-traditional-materials-industrial-parts.php",
  },
  {
    id: 10,
    title: "Dewatering Screen Panels",
    date: "11 May 2024",
    category: "Polyurethane Screens",
    excerpt:
      "At VAM POLY PLAST, we specialize in designing heavy-duty polyurethane de-watering screen panels known for their exceptional quality in the industry. We offer customized panel sizes tailored to meet our clients' specific requirements.",
    fullContent:
      "At VAM POLY PLAST, we specialize in designing heavy-duty polyurethane de-watering screen panels known for their exceptional quality in the industry. We offer customized panel sizes tailored to meet our clients' specific requirements. Design Features: PU dewatering panels are typically manufactured with fine slot apertures (0.1mm to 2mm) that allow efficient water drainage while retaining fine particles. The slot orientation and geometry are optimized for maximum open area and flow rates. Performance Advantages: The self-cleaning action of flexible PU panels prevents slot blinding, maintaining consistent dewatering efficiency throughout the panel's service life. This is particularly important when processing fine, sticky materials. Structural Integrity: PU dewatering panels maintain their dimensional stability under the compressive loads experienced during vibrating screen operation. Application Examples: Coal preparation plants use PU dewatering panels to achieve final moisture content below 15%. Iron ore processing facilities use them to remove process water before pelletizing operations.",
    image:
      "https://www.vampoly.com/images/vampoly/Dewatering/Dewatering-Screen-Panel.webp",
    link: "https://www.vampoly.com/polyurethane-dewatering-screens.php",
  },
  {
    id: 11,
    title: "What is Polyurethane?",
    date: "01 February 2024",
    category: "Polyurethane",
    excerpt:
      "Polyurethane (PUR or PU) is a polymer formed by the chain reaction between the isocyanates and the polyols in the presence of a catalyst. While most polyurethanes are thermosetting polymers that do not melt when heated, thermoplastic polyurethanes are also available.",
    fullContent:
      "Polyurethane (PUR or PU) is a polymer formed by the chain reaction between the isocyanates and the polyols in the presence of a catalyst. While most polyurethanes are thermosetting polymers that do not melt when heated, thermoplastic polyurethanes are also available.\n\nThe physical properties of the polyurethanes are influenced by the amount of cross-linking between the isocyanates and polyols. High amount of cross-linking between the two gives tough and rigid polymers. Similarly, low amount of cross-linking gives elastic and flexible polymers.\n\nPolyurethane offers an exceptional combination of properties: excellent abrasion resistance (often 5–10× better than steel), high load-bearing capacity, flexibility over a wide temperature range, resistance to oils and many chemicals, good electrical insulation, and outstanding impact absorption.\n\nIndustrial Applications: The versatility of polyurethane has made it ubiquitous in industrial settings: conveyor rollers and wheels, screen panels and cyclones in mining, seals and gaskets in hydraulic systems, wear liners in material handling, and protective coatings for equipment exposed to abrasive or corrosive environments.",
    image: "",
    link: "https://www.vampoly.com/polyurethane.php",
  },
  {
    id: 12,
    title: "About Vam Poly Plast",
    date: "01 January 2024",
    category: "Company",
    excerpt:
      "Established in 1988, Vam Poly Plast is one of the leading manufacturers of superior quality Polyurethane products. With our most outstanding engineering knowledge and expertise in Industrial applications, we offer our clients with customised line of infallible products.",
    fullContent:
      "Established in 1988, Vam Poly Plast is one of the leading manufacturers of superior quality Polyurethane products. With our most outstanding engineering knowledge and expertise in Industrial applications, we offer our clients with customised line of infallible products such as Polyurethane Rollers, polyurethane screens, Polyurethane linings, Polyurethane coating, Hydro-cyclones, Cleaning pigs etc.\n\nVam Poly Plast is certified with ISO 9001:2015. We do not compromise on the quality of the products and ensures that the products are manufactured with innovative techniques, followed by strict quality control measures. Also we import our raw materials from the best available in the world.",
    image: "",
    link: "https://www.vampoly.com/about-us.php",
  },
];

const categories = [
  "Polyurethane",
  "Polyurethane Rollers",
  "Polyurethane Wheels",
  "Polyurethane Coating",
];

const recentPosts = [
  { title: "What is Polyurethane?", date: "February 01, 2024" },
  { title: "About Vam Poly Plast", date: "January 01, 2024" },
];

const tags = [
  "2024",
  "Vam Poly Plast",
  "PU Screen Panels",
  "PU Rollers",
  "PU Sheets",
];

interface BlogPostImageProps {
  post: BlogPost;
  className?: string;
}

function BlogPostImage({ post, className }: BlogPostImageProps) {
  const [failed, setFailed] = useState(false);

  if (!post.image || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-pu-red/10 text-pu-red text-sm font-semibold font-body text-center px-4 ${className}`}
      >
        {post.category}
      </div>
    );
  }

  return (
    <img
      src={post.image}
      alt={post.title}
      onError={() => setFailed(true)}
      className={`object-contain bg-white ${className}`}
    />
  );
}

interface BlogPageProps {
  onNavigate: (page: PageType) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [activeTab, setActiveTab] = useState<"recent" | "popular">("recent");

  const toggle = (id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <main className="flex-1 bg-background">
      {/* Hero / Header */}
      <section className="bg-pu-red py-12 sm:py-16 px-4 relative">
        <div className="max-w-6xl mx-auto relative">
          <button
            type="button"
            onClick={() => onNavigate("home")}
            className="absolute top-0 left-0 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-body"
            data-ocid="blog.back_link"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          <div className="text-center pt-10">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-3">
              Polyurethane News Blog
            </h1>
            <nav className="text-white/70 text-sm font-body mt-3">
              <button
                type="button"
                className="hover:text-white cursor-pointer transition-colors bg-transparent border-0 p-0 text-white/70 text-sm font-body"
                onClick={() => onNavigate("home")}
              >
                Home
              </button>
              <span className="mx-2">/</span>
              <span>Blog</span>
              <span className="mx-2">/</span>
              <span>Vam Poly Plast News Blog</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section
        className="py-8 sm:py-12 px-4 bg-background"
        data-ocid="blog.section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            {/* Blog posts column */}
            <div className="flex-1 min-w-0" data-ocid="blog.list">
              {posts.map((post, index) => {
                const isExpanded = expanded.has(post.id);
                return (
                  <article
                    key={post.id}
                    className="mb-8 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                    data-ocid={`blog.item.${index + 1}`}
                  >
                    {/* Post image */}
                    {post.image && (
                      <div className="w-full aspect-video overflow-hidden bg-white">
                        <BlogPostImage post={post} className="w-full h-full" />
                      </div>
                    )}

                    {/* Post content */}
                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-secondary text-pu-red font-body text-xs"
                        >
                          {post.category}
                        </Badge>
                        {post.date && (
                          <span className="text-muted-foreground text-xs font-body">
                            {post.date}
                          </span>
                        )}
                      </div>

                      <h2 className="font-display text-2xl text-pu-red mb-3 leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <button
                        type="button"
                        onClick={() => toggle(post.id)}
                        className="inline-flex items-center gap-2 border-2 border-pu-red text-pu-red font-semibold text-sm px-5 py-2 rounded-sm transition-all duration-200 hover:bg-pu-red hover:text-white font-body"
                        data-ocid={`blog.read_more.${index + 1}`}
                      >
                        {isExpanded ? (
                          <>
                            Read Less <ChevronUp size={15} />
                          </>
                        ) : (
                          <>
                            Read More <ChevronDown size={15} />
                          </>
                        )}
                      </button>

                      {/* Expandable full content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded
                            ? "max-h-[1200px] opacity-100 mt-5"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="border-t border-border/50 pt-5">
                          {post.fullContent.split("\n\n").map((para, pIdx) => (
                            <p
                              key={`${post.id}-para-${pIdx}`}
                              className="text-muted-foreground text-sm font-body leading-relaxed mb-3 last:mb-0"
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0 space-y-6 sm:space-y-8">
              {/* News Categories */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-pu-red px-5 py-3">
                  <h3 className="font-display text-white text-lg">
                    News <em>Categories</em>
                  </h3>
                </div>
                <ul className="divide-y divide-border">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        className="w-full text-left px-5 py-3 text-sm font-body text-foreground hover:text-pu-red hover:bg-secondary/50 transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-pu-red shrink-0" />
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent / Popular / Tags */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="flex border-b border-border">
                  <button
                    type="button"
                    onClick={() => setActiveTab("popular")}
                    className={`flex-1 py-3 text-sm font-semibold font-body transition-colors ${
                      activeTab === "popular"
                        ? "bg-pu-red text-white"
                        : "text-foreground hover:bg-secondary/50"
                    }`}
                    data-ocid="blog.popular_tab"
                  >
                    Popular
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("recent")}
                    className={`flex-1 py-3 text-sm font-semibold font-body transition-colors ${
                      activeTab === "recent"
                        ? "bg-pu-red text-white"
                        : "text-foreground hover:bg-secondary/50"
                    }`}
                    data-ocid="blog.recent_tab"
                  >
                    Recent
                  </button>
                </div>
                <ul className="divide-y divide-border">
                  {recentPosts.map((p) => (
                    <li key={p.title} className="px-5 py-3">
                      <p className="text-sm font-body text-foreground hover:text-pu-red transition-colors cursor-pointer leading-snug">
                        {p.title}
                      </p>
                      <p className="text-xs text-muted-foreground font-body mt-1">
                        {p.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-pu-red px-5 py-3 flex items-center gap-2">
                  <Tag size={16} className="text-white" />
                  <h3 className="font-display text-white text-lg">Tags</h3>
                </div>
                <div className="p-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-body bg-secondary text-pu-red rounded-sm border border-border hover:bg-pu-red hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
