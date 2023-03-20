import '../styles/style.css'
import '../styles/globals.css'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import { QueryClientProvider, QueryClient } from 'react-query'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import api from 'lib/api'
import useAuthStore from 'store/authStore'
import { Roboto } from '@next/font/google'
import { Lora } from '@next/font/google'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import useCompareStore from 'store/compareStore'
import useWishListStore from 'store/wishListStore'
import Head from 'next/head'

const lora = Lora({
  weight: '400',
  subsets: ['latin'],
})


const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({
      easing: "easeOutElastic",
      duration: 500
    });
  }, []);

  const [isLoading, setisLoading] = useState(true)
  const signIn = useAuthStore((state) => state.signIn)

  const signOut = useAuthStore((state) => state.signOut)
  const user = useAuthStore((state) => state.user)

  useEffect(() => {

    api.get('/authMe').then((res) => {
      console.log(res)

      signIn(res.data)
      setisLoading(false)
    }).catch(({ response }) => {
      console.log(response)
      signOut()
      setisLoading(false)
    })
    return () => {
    }
  }, [])



  const router = useRouter();
  console.log(router)
  const hideNavbar = router.asPath.includes("/property-pdf") ? true : false;
  const hideFooter = router.asPath.includes("/property-pdf") ? true : false;
  const comapreState = useCompareStore(state => state.comapreState)
  const wishListState = useWishListStore(state => state.wishListState)


  let url = process.env.NEXT_PUBLIC_FRONT_END_URL
  const BGIMAGE = "/images/fmls.png"
  return (<>
    <Head>
      <link rel="canonical" href={url} />
      <title>{"Gahousefinders"}</title>
      {/* <meta name="description" content={data?.PublicRemarks} /> */}
      <meta property="og:url" content={url} key="ogurl" />
      <meta property="og:image" content={BGIMAGE} key="ogimage" />
      <meta property="og:site_name" content={"Gahousefinders.com"} key="ogsitename" />
      {/* <meta property="og:title" content={data?.UnparsedAddress} key="ogtitle" /> */}
      {/* <meta property="og:description" content={data?.PublicRemarks} key="ogdesc" /> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={"Gahousefinders.com"} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      {/* <meta property="og:image:alt" content={data?.UnparsedAddress} /> */}
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_small_image" />
      {/* <meta name="twitter:title" content={data?.UnparsedAddress} /> */}
      {/* <meta name="twitter:description" content={data?.PublicRemarks} /> */}
      <meta name="twitter:image" content={BGIMAGE} />
    </Head>
    <QueryClientProvider client={queryClient}>

      {wishListState?.length > 0 && !hideNavbar && !hideFooter && (<>
        <div className=' stickyWishList '>

          <li className="list-inline-item text-gray font-weight-500 fs-17 d-flex align-items-center " data-toggle="tooltip" title="Wishlist">
            <p className='rounded-circle '>{wishListState?.length}</p>
            <div className='rounded-1'>
              <Link href={'/wishlist'}>
                <Icon icon="material-symbols:heart-plus" width={35} color="white" />
              </Link>

            </div>
          </li>
        </div>
      </>)}

      {comapreState?.length > 0 && !hideNavbar && !hideFooter && (<>
        <div className='stickyCompare '>
          <li className="list-inline-item text-gray font-weight-500 fs-17 d-flex align-items-center " data-toggle="tooltip" title="Compare">
            <p className='rounded-circle '>{comapreState?.length}</p>

            <div className='rounded-1'>
              <Link href={'/Compare'}>
                <Icon icon="carbon:compare" width={35} color="white" />
              </Link>
            </div>
          </li>

        </div>
      </>)}

      <div className={`overflow-x-hidden ${lora.className}`}>
        {!hideNavbar && <Navbar />}
        <main>
          <Component {...pageProps} />
        </main>
        {!hideFooter && <Footer />}
      </div>

    </QueryClientProvider>
  </>
  )
}
