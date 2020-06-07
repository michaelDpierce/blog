export const LANGUAGE_LOCALE = process.env.LANGUAGE_LOCALE

export default function Intro() {
  return (
    <section>
      <h1>Hi, I'm Michael Pierce</h1>
      <p>
        I'm a software entrepreneur who's currently working in enterprise B2B
        FinTech software. The last company I co-founded, got acquired in 2019 by
        a large player supporting the Mergers and Acquisitions (M&amp;A)
        vertical. Now, I am working on re-branding, developing, and scaling that
        application, to reach the global market.
      </p>
      <p>
        I love to work with ReactJS, Ruby, Python, and NodeJS. I've started
        multiple boutique software companies over the years. I have experience
        working with local and state governments, automotive dealerships,
        Fortune 500 companies, social media ad agencies, and fun small problems
        such as local rideshare advertising, car dealership form processing,
        open water swimmer safety, and more!
      </p>
      <p>I plan on continuing to ship until I get tech-sick.</p>
      <hr />
      You Can Find Me Around Here:
      <br />
      <a
        href="https://github.com/michaelDpierce"
        hrefLang={LANGUAGE_LOCALE}
        rel="noopener"
        target="_blank"
        rel="noopener"
      >
        GitHub - @michaelDpierce
      </a>
      <br />
      <a
        href="https://news.ycombinator.com/user?id=matchmike1313"
        hrefLang={LANGUAGE_LOCALE}
        rel="noopener"
        target="_blank"
      >
        Hacker News - @matchmike1313
      </a>
      <br />
      <br />
      Or Contact Me Directly:
      <br />
      <br />
      <address>
        <a href="mailto:matchmike1313@gmail.com">matchmike1313@gmail.com</a>
        <br />
        <a href="tel:+1 781-697-9583">781-697-9583</a>
        <br />
        <a href="sms:+1 781-697-9583">781-697-9583</a>
        <br />
      </address>
      <br />
      <hr />
      <h2>More About Me</h2>
      <p>
        I was born and raised in beautiful Denver, CO. I grew up camping,
        hiking, and enjoying the great outdoors. At a young age, I started to
        build computers, learn to code, and fall in love with all things tech. I
        have a maltese yorkie named George, who my family all calls "Tuna" after
        Jim from The Office. I am an avid traveler, whiskey and cigar
        connoisseur, and I plan on retiring early, big proponet of the{' '}
        <a
          href="https://www.investopedia.com/terms/f/financial-independence-retire-early-fire.asp"
          hrefLang={LANGUAGE_LOCALE}
          rel="noopener"
          target="_blank"
        >
          FIRE
        </a>{' '}
        movement.
      </p>
      <h2>My Companies</h2>
      <ul>
        <li>
          BankerBox - Investment Banking, Evolved: Acquired by Intralinks, an
          SS&C company in 2019
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
        <li>Computer: MacBook Air 2019</li>
        <li>Editor: VS Code</li>
        <li>Static Site Generator: NextJS</li>
        <li>Hosting: Netlify</li>
        <li>CMS: Prismic.IO</li>
      </ul>
      <h2>100 Countries by 100</h2>
      <ol>
        <li>New Zealand</li>
        <li>Tonga</li>
        <li>Canada</li>
        <li>Iceland</li>
        <li>Cuba</li>
        <li>Germany</li>
        <li>Romania</li>
        <li>Switzerland</li>
      </ol>
      <h2>Want to work with me? Have an idea?</h2>
      <p>
        Would you like to collaborate on a project, app, or hire me as a
        part-time CTO?
      </p>
      <a href="mailto:matchmike1313@gmail.com">Please drop me an email here.</a>
    </section>
  );
}
