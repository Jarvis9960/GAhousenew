import cogoToast from "cogo-toast";
import api from "lib/api";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BounceLoader } from "react-spinners";
import Head from "next/head";
import { useRouter } from "next/router";

function Property_main_page({ id, data }) {

  const [review, setreview] = useState('')
  const Section2 = dynamic(() => import("@components/Property_Page/Section2/Section2"), {
    ssr: false,
  })


  const router = useRouter()
  let url = process.env.NEXT_PUBLIC_FRONT_END_URL + router.asPath
  const BGIMAGE = "/images/fmls.png"
  return (
    <div>
      <Head>
        <link rel="canonical" href={url} />
        <title>{data?.UnparsedAddress}</title>
        <meta name="description" content={data?.PublicRemarks} />
        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:image" content={BGIMAGE} key="ogimage" />
        <meta property="og:site_name" content={"Gahousefinders.com"} key="ogsitename" />
        <meta property="og:title" content={data?.UnparsedAddress} key="ogtitle" />
        <meta property="og:description" content={data?.PublicRemarks} key="ogdesc" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={"Gahousefinders.com"} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="og:image:alt" content={data?.UnparsedAddress} />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_small_image" />
        <meta name="twitter:title" content={data?.UnparsedAddress} />
        <meta name="twitter:description" content={data?.PublicRemarks} />
        <meta name="twitter:image" content={BGIMAGE} />
      </Head>

      <div className="" style={{ minHeight: "80vh" }}>
        {data ? (<>
          <Section2 data={data} />
        </>) : (<>
          <div className="w-100 h-100 d-flex justify-content-center align-content-center">
            Property Not Found
          </div>
        </>)}
      </div>

      <div className="container border-top mt-5">
        <div className=" row mt-3 mb-3 d-flex flex justify-content-center">
          <div className="col-xl-2 col-lg-4 col-md-6 col-10 d-flex justify-content-center ">
            <Image layout='fill'
              src="/images/greenidx.png" alt={""} />
          </div>
          <div className="col-10 ">
            <small>
              Listings identified with the FMLS IDX logo come from FMLS and are held by brokerage firms other than the owner of this website. The listing brokerage is identified in any listing details. Information is deemed reliable but is not guaranteed. If you believe any FMLS listing contains material that infringes your copyrighted work please click hereto review our DMCA policy and learn how to submit a takedown request. © 2021 First Multiple Listing Service, Inc.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Property_main_page;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { id } = ctx.params
  let data = null
  if (id) {
    let res = await api.get("getSingleProperty/" + id)
    data = res?.data
  }
  return {
    props: {
      data: data,
      id: id,
    }
  }
}