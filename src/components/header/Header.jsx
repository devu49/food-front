import React, { useEffect, useRef, useState } from 'react';
import "./header.css";
import { NavLink, } from 'react-router';
import { useNavigate } from 'react-router';
import LoadingBar from 'react-top-loading-bar'

const Header = () => {

  /**
   * hooks section start
   */
  const navRef = useRef(null);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);



  /**
   * useEffect hook to handel the scrollEvent start
   */
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (document.documentElement.scrollTop > 300) {

          navRef.current.classList.add("nav_sticky");

        } else {
          navRef.current.classList.remove("nav_sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * useEffect hook to handel the scrollEvent end
   */


  /**
   * hooks section end
   */
  const nav = [
    {
      name: "Home",
      slug: "/",
      id: 1,
      isActive: true,
      className: "nav",
      icon: ""
    },
    {
      name: "Contact",
      slug: "/contact",
      id: 2,
      isActive: true,
      className: "nav",
      icon: ""


    },
    {
      name: "AboutUs",
      slug: "/about_us",
      id: 3,
      isActive: true,
      className: "nav",
      icon: ""

    },
    {
      name: "Login",
      slug: "/login",
      id: 4,
      isActive: true,
      className: "login_btn primary_btn",
      icon: ""

    },
    {
      name: "Logout",
      slug: "/logout",
      id: 5,
      isActive: false,
      className: "nav",
      icon: ""

    },
    {
      name: "Dash",
      slug: "/dash",
      id: 5,
      isActive: false,
      className: "nav",
      icon: ""

    },
  ]


  /**
   * 
   * @param {redirectUrl} slug 
   * function to redirect if the user click the nav
   */
  const redirectTo = (slug) => {
    setProgress(progress + 100);
    navigate(slug);
  }

  return (
    <>
      <header className={`header}`} ref={navRef}>
        <LoadingBar
          color='#3b8a19'
          progress={progress}
          height={4}
          onLoaderFinished={() => setProgress(0)}
        />
        <nav className='navs flex items-center justify-between'>
          <ul className='mt-3'>
            <li>
              <NavLink to={"/"}>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEg8QEBMSFhAPEA8ZEBUVFQ8QEg8OFRYWFxURFRcYHCggGBslGxUXITEiJSkrLi4vFx8zODMsNygtLisBCgoKDg0OGxAQGi0mHyUvLy0tLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABAEAACAgACBwQHBgQEBwAAAAAAAQIDBBEFBhIhMUFRYXGBkQcTMkJSscEUIiOSodFTYnKiFSQzgkNjdIOz8PH/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAgMG/8QAMREBAAIBAwEFBgUFAQAAAAAAAAECAwQREjEFEyFBUTJCYXGRsRQiI1KBM0Oh0fAV/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW3dFSUM1tNNpc3FZZvLxXmY3jfZjlG+y4ZZRTX/Wn7DSlXsvEXPKpS3qMU1tTks+GW7vaOObLwjw6o+fN3ceHVc1N1wqx0GvYxEF+JW2t6+OHWP6rmMWaLx8WcOaMkfFJzs7gAAAAAAAAAAAAAAAAAAAALOKxMK4udk4wiuMpNRXmzW1orG8y1vetY3tO0I5jdesNDNV7dj/AJVlH80sv0Id9fir08Vfk7Uw19nefk1Vuv8AY39ymCX805Sf6JEee0beVUW3a9/drH1UR14xHwVeU/3Nf/QyekOf/q5fSFEPSLbGTjZRB5P3Zyi/1TNo7Rt51/y6V7Xt50j6t1gNecNZkp7dbfxJSj5xzJFNfjt18ErH2pht7W8Izj9Pzli/tMHurklWuTqXFP8Aq3vx7CBk1Mzl5x5fZWZtZac/eV8unydAhpar1H2pySqjByk3ktlLin2rgXNMkWpzjo9BjzVvTnHRwTWbTU8ZiLMRPNKTyrj/AA6Vnsx7+b7WyuyXm9t1XkyTe27BweKnVOFtUnCyt5wkuMX4/LgzWJmJ3hpWZrO8O76l6zxx1O3ujdXkrodJcpL+V8vFciyxZecbrbDljJXfzSI6uwAAAAAAAAAAAAAAAAAeSeW8CEaya+wrbqwqU7FmnY99cH2fG/0K/ProrPGnjKq1XaVaflx+M+vkgeMx9t8tu6cpy7XuXcuC8Cqvkted7TupMmW+Sd7zuogatF+AF6AGPjqt6kue59/UCisDKqAs6y23ywdlNcn6vbjOyC4yjHp2Z5NrnskrT5pr+SeidpM81/TnpKF4a3Ndq/U72jZLvG0rxq0bfVXTksFiK71nsezdH46W/vLvXFdqOmO/C27riyd3bd9CUWxnGM4tOM4pxa4OL3plnE7reJ38VwyyAAAAAAAAAAAAAAAUyklve5Lj3AmdnLtdNb5XOVGHk1h02pzTadzXTpD59xT6rVzeeFOig1uunJPDH0+6DyxtUeM4+Dz+RDjFeekIFcGSekEdLU/H/bP9jbuMnp9m/wCFy+n+Y/2yqNI1S4WR8Xs/M1nFeOsNLYMlesNhA0cmRAC7sJpp8GBgutxeT/8AqAv1AZdYZQXWDRrw121FfhWZuHRfFDw+WRYYr86/Fa4MneU2nqsxeazXMMz4KbJ7Kb6cO8RG8kRvLtvos0k7MJGiTznhtlLj/pyWcfLevBEvSZeVZifJN0GbnWaz5SmpMTwAAAAAAAAAAAAAHjA5t6U9bJV/5GhrblHPES3/AHYv2a+9re+zLqQ9Vf3PqgazJvHdxPzclxEZz9qefZwXkiJXjXpCHThT2YYU4NPJnaJ3d4ndnYbRFk6LcRH2KpJNc2ss5SXdmvN9DSckRbi52yxF4rLXm7ov4bG2V74TcezP7r71wNbUrbq0vjrf2oSHRetEJNRucYt+8n91965fIi5NNMeNUDLo5jxolFbzya4Ph3EVDVzqUlk/DsDDH9W4vJ+HaBkVhlb0ro6OIqlW9ze+D+Ga4Pu5PsbN8d+E7umLJOO27nDc6pShJZOMmpJ8pLiWO0Wjdb7ReN4UpuyUYv3mkvETtWsltqVmXVPRritjGbHu3VTj/ujlKP6J+Zw0N/1dvVE7NybZ9vV1kunogAAAAAAAAAAAAAGv09pOOGw9+Ilwqrk0vil7sfF5LxNb241mWmS3Gsy+dcZiZW2WW2POds5Sm+sm8yqmd53U1pmZ3laMMMadUrLIVwWc5NRS/mbOkTtG8usTxrvLpmCwsaqoUx9mEcv6nzb7235lde02tuqL3m1uTW6B9G32m62UrVDCwkslHfc89+zvWUUt6z39xaaX9Wu8rrR/rV3mejpuiNSsBhkvVYetyXv2L1tj7dqWeXgTopWOkLGuKtekNxdTXGMm4Q2Ypt/djlkuzIzO0Ru2tMVjeXM8VCdtk5xplGMpfdjGuSUY8lkl0KDLzyXm20/R5fNzy3m/GfH4Sqr0fc+FVv5J/sa91k/bP0c4wZZ92fpLIjoi9rfTZl/RJGfw+X9st40uafcn6PVq9iOVU/HJG34bN+2W0aPPPuS0uO0tTh7J03T2ba2lOOUm4tpPkujRjuMm+2zWdLlidpqiGtuJw10o20Tzse6xbM47SXCe9ceXkScNb1ja0JumrkpHG0MPQOGzk5vhDcv6n+y+ZrqL7V2a6zJtXj6pjqpZs4zCP/nQX5vu/U46adstfmi6Ods9fm7cegeqAAAAAAAAAAAAAAc39MuktmvD4VP/AFZynP8Aohuin/uln/tImqt4RCFrL+EVcoISvUWz2U35d5mI3bVjeW71JwG+WJkuGca8+vvSXy8zlqb+7CPrMm0cISuUyIgNjq/pF02bfu5pTXWL4+R20+bur7/VI0uonDk5eXm6RTYpJSTzUkmn1TPQVmJjeHqa2i0bwrMsvMgPQPMgAHzd6Qr1PSWPkuCv2fGEYwl+sWQck/mlX5Z/PLR4eiVklCKzbfgu19hytaKxvLhe8UjeUtw2FVcIwjwXPq+bK295tO6myXm9t5bTVyvPF4T/AKip+Uk2dNP/AFa/N00v9avzh209C9YAAAAAAAAAAAAAA436U8PfbjnsU3yrqpripRqtlBt5ylk0sveS8CBqItN+it1UWm/RDJYC5cabl312r6EfjPojcbejEng7LLI1qE1m0s3GSSb4t5rkb+xXeW3sVm0p7h6o1whXH2YRSXb2lba3Kd1Pe02tvJKZhqvYOXteAEy1O0txw8321fWH1XiWmgz/ANuf4XXZmp/tW/hLCzXL0ABRZao5bTSzaSzeWcnwS7TEzEdWJmI6sLTmlIYai7EWezVCUv6n7sV2t5LxFp2jdi1uMby+Z412Yi2cks7LZznN8lKcnKTb5b2yuveK+MqvJkrWOVkp0boyNMes37UuvYuiK7Llm8/BU5s85Z+DKcTm4N3qNhdvG09K1Ob8Fkv1kiVoq75o+Cd2dTlnj4OtF69KAAAAAAAAAAAAAAAeMCEa96UzlHDxe6OUrO/3Y/XyKrX5vcj+VJ2pqN57qP5Q6UytU61KYGZg/Zz6tgX67nGUZReUotNPo0ZraazvDatpraJjq6VoPSSxFUbF7XCa+Ga4ruPQYMsZaRZ6nTZ4zY4tH8tidkh5mBBNddJudsaoNpUNNtfxeKa7vmyn12eZvxr5fdQ9paiZyRSs9Pu0Ot2Psx8KaZycKa0nbGPG+7k2+UVxS6vsRi+um1YjZrl7StakREePm1eHwkK1s1xUY9nN9X1ZCtabeMq697Xne0qnEw1W3ECb+jfAZK69r2soQ7lvk/PLyLTs/H4Tdd9lYtom8/JOSzXAAAAAAAAAAAAAAABRc3k9nLayeWe5N8szE/Bid9vBA79TsVZKU52U7U5Ny32Pe9/wlTbQ5bTMzMKO/Zua9ptaY8fmh+ITjKUXxjKSfenkyBMbTsqrVmszErKebSXFmGGzW5JLkgPaLK/WUxtk4wtthDaWX3ZTeUXv7cvM64ccZL8Zd9PhjLkiszs6NoPQEcNKUoWWSU1lKMtjZbXB7lxLjBpowzvEyv8ATaOMEzNbTO7dkpNYGmseqKp2e9wgus3w/fwOOfL3dJsj6nNGLHNnMrM223vbbbfVvizz0zMzvLy0zMzvK24hhQ4gW5RDD2nDSnKMILOU2lFdrM1rNp2htSk3tFY6y61onAxoqrqjwhHzk98n4ts9FixxSkVh6zDijFSKR5Mw6OoAAAAAAAAAAAAAAAA8YHItd8J6rF2r3bcrI90s8/7kyh1lOOWfi8xr8fDPPx8WuwNXvvn7Pd1IyGyZSA0etj/A/wC5D6kjTe2l6P8AqOl+jPXGOMpjTbL/ADdEUpp5J3QSyV0evb0feXWLJyjZ6LDk5Rt5ptmdXZBtbdIbdmwn9yrNdjnzf08yl1ubnfjHSHnu0s/PJwjpH3Ri7E/CvFkJWsOy6T5+W4DGnn1fmwLbk1za8WB0XUDQc4R+0357U1+FF8YQfvvtfy7y20Wn4xzt18l72bpOEd5brPRNUWK2AAAAAAAAAAAAAAAAAAwIpr9odXVQuSzlh82/5qnxXg8n4EHXYeVOUeSt7Swc8fOOsIC5FM88ocgNXrDDaos/l2X5NZ/pmdcE7Xd9NbbJCJYTFTqnC2qUoWVvOEovJxf/ALyLKJmPFcxO0+DrmqvpMsvhOm6p/aI1txthl6uXBZzj7r7s0bZNVxpPq2zazhjnfqxLm5PNlM89M7seUAwtSgBalACU6l6twu/zFrjKEJNRr45zXOf7Fho9NF/z2+i17P0dcn6lvGI8v9uiZFuvnoAAAAAAAAAAAAAAAAAAAUzjmmnwa3rimjExuxMbuV60aHeGtaSfqZ5ut9OsH2r5FFqsHdX+DzOs03c38Ok9GjciMhrVyUk4vhJNPue4zE7TuzWdp3Qe+pwlKD4xbT7cuZZ1neN15S0WjdPdU8BGmhSnKKsuylLNxTjD3Y/N+JCz2m1toVupvN7bR0htLMXUuNtX54fuceNvRH7u3pP0Y1mkqP41X54fubd3f0lt3V/2z9GPZpbDfxq/zJme6v6HcZP2y3kNXcTJKUapNSSaedeTT3p+0dI0uafddY0Oon3fs3uqmjsXh7HtV/g2e39+v7r5TSz8CZpMWbFbxjwn5LDQYdRhv41/LPxhNizXIAAAAAAAAAAAAAAAAAAAADD0ro2vEVyqsWcZcHzjLlJPk0c8mOuSvGzlmw1y142cm09oe3C2OFizi3+HNezYvo+z6FFnwWxW2np6vM6nTXwW2t08palyOKO0Wn8Ln+LHsU/o/p5EvTZPdlP0eb3JaPZRLWDJhhN295Gk3c5yK1hF1Zjmx3j37IurHOTvJdp9EunPW4f7JN52YRRUM+MsPwh+XLZ7siZp8nKNp8k/TZeUbT5J6SUp6AAAAAAAAAAAAAAAAAAAAAAAxsdgq7oSrtipQlxT+a6PtNL0reNrNMmOuSvG0bw5xrDqNbXnPDZ2173svL1sV8p/Mqs+htXxp4x/lR6ns29PHH4x6eaGWx3yjJZNZqUWsmuqaZA6SrPGs/FHdI4B1vajvg/7X0f7lhizRaNp6rXBnjJG09V2Ms0n1EszG0vTDABs9W9MSweJqxEc8oPKxfHVLdOPlvXakb478LbumPJwtyfQ2FxEbIQsg1KFkVKDXCUWs015lpE7xvC4id43heMsgAAAAAAAAAAAAAAAAAAAMwPMwG0gPNpAa/Smh8PiFldXCT5PhNd0lvRyyYaZPahxy6fHlj88bovjvRxRLP1V045+7JRsj3cn+pDt2fXrWZhAv2VTfelpj/KM4n0UXpv1F9Di+U/Wwy7soy8jb8Lk85iW0aPL5zE/WP8Aa1H0WY3nbhUuydzf/jH4W/rH/fwz+Dyesf8Afw2WC9Er/wCNill0rhv/ADSf0N40nrLeNF62SnRGoGBoyfq/WzXCVz9Zv67OSivI7VwUqkU02OvlulEI5LJZZLglwSOzuqAAAAAAAAAAAAAAAAeNgUSmBblYwLM72BjzxUgMezHS7QMWzSU1yYGNZpixcmBjy07Z8MvIAtO2fDLyAv16YsfJgZNek5vkwMmvHS7QMmvFSAyIXsC9G1gXYzYFaYHoAAAAAAAAAAAAAPMgPHBAUulAUPDICh4KIFD0fECl6Mj0QFP+FQ6IB/hUOiAqWjIdEBUtHRArWCiBWsLECtUoCpQQHuQHoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=" alt="logo" height={80} width={80} />
              </NavLink>
            </li>
          </ul>
          <ul className='flex justify-center items-center gap-7'>
            {
              nav.map((currentNav, index) => currentNav.isActive && <li key={currentNav.id}>
                <button onClick={() => redirectTo(`${currentNav.slug}`)} className={`${currentNav.className}`}>{currentNav.name}{currentNav.icon}</button>
              </li>)
            }
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header