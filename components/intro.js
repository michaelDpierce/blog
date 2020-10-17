export const LANGUAGE_LOCALE = process.env.LANGUAGE_LOCALE;

export default function Intro() {
  return (
    <section>
      <h1>Hi, I'm Michael Pierce</h1>
      <p>
        Welcome to my small & private nook of the internet. This is a blog for
        family, friends, and the curious person wanting to learn more about me.
        You can find{' '}
        <a href="https://michaelpierce.dev"> my professional blog here</a>.
      </p>
      <hr />
      <h2>Contact Me</h2>
      <address>
        <a href="mailto:matchmike1313@gmail.com">matchmike1313@gmail.com</a>
        <br />
      </address>
      <br />
      <hr />
      <h2>My Companies</h2>
      <ul>
        <li>
          BankerBox - Investment Banking, Evolved: Acquired by Intralinks, an
          SS&amp;C company in 2019
        </li>
        <li>
          DigiQuatics - The All-In-One App for Aquatics: 35,000+ Users (Sold to
          private buyer in 2019)
        </li>
        <li>
          AutoLytx - Automotive Analytics, Made Simple: Dealers in 5 States
          (6-figure SaaS)
        </li>
        <li>
          OpenWaterTracker - Track Open Water Swimmers Easily (Sold to private
          buyer in 2019)
        </li>
        <li>
          WeOwePro - Dealership WeOwe Forms Workflow: Worked with local dealers
          in Denver area in 2017
        </li>
        <li>
          AdWheels - Rideshare Advertising Platform: 20+ Local Uber Drivers in
          Denver + 10 Prominent Local Businesses
        </li>
        <li>
          FeatureAuditor - User driven product designs made easy: Pre-Launch
        </li>
      </ul>
      <h2>Currently Using</h2>
      <ul>
        <li>Computer: MacBook Pro 16 Inch 2019</li>
        <li>Editor: VS Code</li>
        <li>Static Site Generator: NextJS</li>
        <li>Hosting: Vercel</li>
        <li>CMS: Prismic.io</li>
      </ul>
      <h2>100 Countries by 100</h2>
      <ol>
        <li>New Zealand</li>
        <li>Tonga</li>
        <li>Canada</li>
        <li>Iceland</li>
        <li>Cuba</li>
        <li>Peru</li>
        <li>Germany</li>
        <li>Romania</li>
        <li>Switzerland</li>
      </ol>
    </section>
  );
}
