import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text, Button, Img } from "../../components";

const data = [
  {
    platformini: "Platform ini cocok untuk siapa saja?",
    description:
      "Platform kami cocok untuk para pebisnis khususnya para petani ikan, baik tawar maupun laut.",
  },
  {
    platformini: "Bagaimana cara untuk memaksimalkan AI tersebut?",
    description:
      "Untuk memaksimalkan AI kami sebaiknya anda mengmasukan informasi secara lengkap mulai dari modal, dsb.",
  },
  {
    platformini: "Apakah terdapat berbagai macam panduan motode dalam budidaya? ",
    description:
      "Tentu, kami menyediakan banyak panduan metode sesuai dengan kebutuhan para penggunanya",
  },
  {
    platformini: "Apa itu Panduan AI?",
    description:
      "Panduan Ai merupakan fitur utama dari platform kami, pengguna dapat mencari panduan untuk budidaya yg dibantu AI",
  },
  {
    platformini: "Apa perbedaan versi dari mobile dan versi web?",
    description:
      "Versi mobile menyediakan lebih banyak fitur & untuk versi web kami hanya menyediakan fitur utama saja",
  },
  {
    platformini: "Jelaskan fitur dari Marketplace Pemasaran",
    description:
      "Fitur pemasaran merupakan fitur dimana pengguna dapat melakukan kerja sama dengan agen agen untuk penjualan.",
  },
];
const data1 = [
  {
    lockone: "images/img_lock.svg",
    loginregister: "Login & Register",
    andadapat: "Anda dapat membuat akun sebelummelakukan pencarian",
  },
  {
    lockone: "images/img_4_filled_compass.svg",
    loginregister: "Tulis Bisnis yang di Inginkan",
    andadapat: "Tuliskan Bisnis yang anda inginkan, masukan informasi detail untuk hasil yang maksimal",
  },
  {
    lockone: "images/img_4_filled_check_circle.svg",
    loginregister: "Ikuti Panduan",
    andadapat: "Ikuti panduan yang Ai kami berikan, ingat untuk tetap bijaksana dalam berbisnis",
  },
];

export default function LandingPagehomePage() {
  return (
    <>
      <Helmet>
        <title>Fishbiz</title>
        <meta
          name="description"
          content="Discover AI-powered solutions for aquaculture on Fishbiz. Get started with our easy-to-follow guides, sophisticated features, and marketing tools to grow your fish farming business efficiently."
        />
      </Helmet>

      {/* main layout section */}
      <div className="relative h-[4574px] w-full md:h-auto">
        <div className="w-full bg-gray-50">
          {/* header section */}
          <header className="flex items-center justify-between gap-5 border border-solid border-gray-200 p-[15px] md:flex-col">
            <Heading as="h5" className="ml-[55px] text-center !font-bold !text-black-900 md:ml-0">
              <span className="text-indigo-A400">Fish</span>
              <span className="text-black-900">biz</span>
            </Heading>
            <Button
              size="sm"
              variant="outline"
              shape="round"
              rightIcon={<Img src="images/img_send.svg" alt="send" className="h-[18px] w-[18px]" />}
              className="mr-[55px] min-w-[150px] gap-2.5 font-medium !text-indigo-A400 md:mr-0"
            >
              Get started
            </Button>
          </header>

          {/* hero section */}
          <div className="flex flex-col items-center">
            <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
              <Img
                src="images/img_vector_1.png"
                alt="vectorone_one"
                className="h-[289px] w-[19%] object-cover md:w-full"
              />
              <div className="relative mb-[77px] h-[557px] w-[76%] md:w-full md:p-5">
                <div className="absolute bottom-[0.00px] left-[0.00px] m-auto flex w-[69%] flex-col items-center gap-[42px]">
                  <div className="flex flex-col items-center gap-3 self-stretch">
                    <Button
                      size="lg"
                      variant="outline"
                      shape="round"
                      leftIcon={<Img src="images/img_arrowleft.svg" alt="arrow_left" className="h-[24px] w-[24px]" />}
                      className="min-w-[308px] gap-2 !rounded-[22px] font-semibold"
                    >
                      With the latest AI integration
                    </Button>
                    <div className="flex flex-col items-center gap-[23px] self-stretch">
                      <Heading size="4xl" as="h1" className="text-center !text-black-900">
                        <span className="text-black-900">Buat&nbsp;</span>
                        <span className="text-indigo-A400">Budi Dayamu</span>
                        <span className="text-black-900">
                          <>
                            &nbsp;
                            <br />
                            Menjadi Lebih&nbsp;
                          </>
                        </span>
                        <span className="text-indigo-A400">Mudah!</span>
                      </Heading>
                      <Text as="p" className="w-[82%] text-center md:w-full">
                        <>
                          Kami menyediakan banyak Fitur fitur untuk membantu bisnis budi dayamu! <br />
                          Dengan bantuan AI kami, budi dayamu akan menjadi lebih mudah!
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <Button size="xl" variant="outline" className="min-w-[192px] rounded-[24px] font-medium sm:px-5">
                      Download Mobile
                    </Button>
                    <Button
                      color="indigo_A400"
                      size="xl"
                      rightIcon={
                        <Img src="images/img_arrowleft_white_a700.svg" alt="arrow_left" className="h-[16px] w-[16px]" />
                      }
                      className="min-w-[203px] gap-2.5 rounded-[24px] font-medium sm:px-5"
                    >
                      Mulai Sekarang
                    </Button>
                  </div>
                </div>
                <Img
                  src="images/img_group_2.png"
                  alt="image"
                  className="absolute right-[0.00px] top-[0.00px] m-auto h-[371px] w-[371px] object-cover"
                />
              </div>
            </div>

            {/* features section */}
            <div className="relative mt-[66px] h-[110px] self-stretch md:h-auto">
              <div className="flex w-full items-center justify-between gap-5 bg-indigo-A400 p-[11px] md:flex-col">
                <Heading size="2xl" as="h2" className="ml-[7px] self-end text-center !text-indigo-A400 md:ml-0">
                  organized
                </Heading>
                <div className="h-[10px] w-[10px] rounded-[5px] bg-indigo-A400 md:p-5" />
                <Heading size="2xl" as="h3" className="self-end text-center !text-indigo-A400">
                  easy
                </Heading>
                <div className="h-[10px] w-[10px] rounded-[5px] bg-indigo-A400 md:p-5" />
                <Heading size="2xl" as="h4" className="text-center !text-indigo-A400">
                  fast
                </Heading>
                <div className="h-[10px] w-[10px] rounded-[5px] bg-indigo-A400 md:p-5" />
                <Heading size="2xl" as="h5" className="self-end text-center !text-indigo-A400">
                  sophisticated
                </Heading>
                <div className="h-[10px] w-[10px] rounded-[5px] bg-indigo-A400 md:p-5" />
                <Heading size="2xl" as="h6" className="mr-2.5 self-end text-center !text-indigo-A400 md:mr-0">
                  organized
                </Heading>
              </div>
              <div className="absolute bottom-8 left-0 right-0 top-0 m-auto flex h-20 w-[100%] rotate-[-3deg] items-end justify-between gap-5 bg-gray-900 p-4 md:relative md:flex-col">
                <Text size="lg" as="p" className="ml-0 mt-[42px] text-center !text-white-A700 md:ml-0">
                  organized
                </Text>
                <div className="mb-[13px] h-[10px] w-[10px] rounded-[5px] bg-indigo-A400 md:p-5" />
                <Text size="lg" as="p" className="mb-[3px] text-center !text-white-A700">
                  easy
                </Text>
                <div className="mb-[13px] h-[10px] w-[10px] rounded-[5px] bg-indigo-A400 md:p-5" />
                <Text size="lg" as="p" className="mb-[5x] text-center !text-white-A700">
                  fast
                </Text>
                <div className="mb-[13px] h-[10px] w-[10px] rounded-[5px] bg-indigo-A400 md:p-5" />
                <Text size="lg" as="p" className="mt-[18px] text-center !text-white-A700">
                  sophisticated
                </Text>
                <div className="mb-[13px] h-[10px] w-[10px] rounded-[5px] bg-indigo-A400 md:p-5" />
                <Text size="lg" as="p" className="mr-1 mt-2 text-center !text-white-A700 md:mr-0">
                  organized
                </Text>
              </div>
            </div>

            {/* steps section */}
            <div className="container-sm mt-[105px] md:p-5">
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="flex w-[56%] flex-col items-start gap-[42px] md:w-full">
                  <div className="flex flex-col gap-[11px] self-stretch">
                    <Heading
                      size="3xl"
                      as="h1"
                      className="w-[76%] leading-[120%] tracking-[-0.21px] !text-black-900 md:w-full"
                    >
                      <span className="text-black-900">Langkah&nbsp;</span>
                      <span className="text-indigo-A400">Mudah</span>
                      <span className="text-black-900">
                        <>
                          &nbsp;untuk
                          <br />
                        </>
                      </span>
                      <span className="text-indigo_A700">Realisasikan Bisnis Anda!</span>
                    </Heading>
                    <Text as="p">
                      <>
                        Tuliskan Bisnis yang anda inginkan & secara otomatis Ai kami akan membuatkan <br />
                        panduannya! Ai kami juga akan menyesuaikan dengan biaya/modal yang anda
                        <br />
                        miliki. Tekan tombol dibawah untuk memulai.
                      </>
                    </Text>
                  </div>
                  <Button
                    size="3xl"
                    variant="outline"
                    leftIcon={
                      <Img src="images/img_arrowleft_blue_a700.svg" alt="arrow_left" className="h-[24px] w-[24px]" />
                    }
                    className="min-w-[192px] gap-2.5 rounded-[28px] !border-2 font-medium !text-blue-A700 sm:px-5"
                  >
                    Get Started
                  </Button>
                </div>
                <div className="flex w-[38%] flex-col gap-8 md:w-full">
                  {data1.map((d, index) => (
                    <div key={"listlockone" + index} className="flex w-[86%] items-start gap-6 md:w-full sm:flex-col">
                      <Button color="indigo_50_7f" size="2xl" shape="circle" className="w-[52px] !rounded-[26px]">
                        <Img src={d.lockone} />
                      </Button>
                      <div className="flex flex-1 flex-col items-start gap-[5px] sm:self-stretch">
                        <Heading as="h5" className="!text-blue_gray-900">
                          {d.loginregister}
                        </Heading>
                        <Text as="p" className="leading-[103.5%]">
                          {d.andadapat}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* benefits section */}
            <div className="mt-[106px] flex flex-col items-center self-stretch">
              <div className="flex justify-center self-stretch bg-gray-900 py-[89px] md:py-5">
                <div className="container-sm mb-[188px] flex items-start justify-between gap-5 md:flex-col md:p-5">
                  <Heading size="3xl" as="h1" className="w-[38%] leading-[120%] tracking-[-0.21px] md:w-full">
                    <>
                      Fitur yang Akan
                      <br />
                      Membantu Bisnis Anda!
                    </>
                  </Heading>
                  <div className="flex w-[29%] flex-col items-start gap-[18px] md:w-full">
                    <Text size="xs" as="p" className="!text-gray-300">
                      <>
                        Fishbiz dilengkapi dengan berbagai fitur canggih <br />
                        yang dapat membantu bisnis anda, coba fitur <br />
                        kami sekarang!
                      </>
                    </Text>
                    <Button
                      color="indigo_A400"
                      size="xs"
                      shape="round"
                      rightIcon={
                        <Img
                          src="images/img_arrowleft_white_a700_16x16.svg"
                          alt="arrow_left"
                          className="h-[16px] w-[16px]"
                        />
                      }
                      className="min-w-[181px] gap-1.5 !rounded-[20px] font-medium"
                    >
                      Pelajari selengkapnya
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto mt-[-192px] flex w-full max-w-[1253px] gap-[17px] md:flex-col md:p-5">
                <div className="flex w-full flex-col items-center rounded-[16px] bg-white-A700 pt-[33px] sm:pt-5">
                  <div className="relative z-[1] flex w-[84%] flex-col items-center gap-3 md:w-full md:p-5">
                    <div className="flex items-start gap-2">
                      <Img
                        src="images/img_arrowleft_blue_a700.svg"
                        alt="ai_integration"
                        className="h-[24px] w-[24px]"
                      />
                      <Heading size="lg" as="h4" className="!text-black-900">
                        AI Integration
                      </Heading>
                    </div>
                    <Text size="xs" as="p" className="text-center">
                      <>
                        Masukan bisnis yang anda ingin buat & secara
                        <br />
                        otomatis AI kami akan membuatkan panduan
                        <br />
                        lengkap dari bisnis tersebut.
                      </>
                    </Text>
                  </div>
                  <Img
                    src="images/img_iphone_15.png"
                    alt="iphonefifteen"
                    className="relative mt-[-111px] h-[476px] w-full rounded-[16px] object-cover md:h-auto"
                  />
                </div>
                <div className="relative h-[509px] w-full rounded-[16px] bg-white-A700 pb-[46px] md:h-auto md:pb-5">
                  <Img
                    src="images/img_iphone_16.png"
                    alt="iphonesixteen"
                    className="h-[462px] w-full rounded-[16px] object-cover"
                  />
                  <div className="absolute bottom-[10%] left-0 right-0 m-auto flex w-[76%] flex-col items-center gap-3">
                    <div className="flex items-start gap-2">
                      <Img src="images/img_settings.svg" alt="settings_one" className="h-[24px] w-[24px]" />
                      <Heading size="lg" as="h4" className="!text-black-900">
                        Pemasaran
                      </Heading>
                    </div>
                    <Text size="xs" as="p" className="text-center">
                      <>
                        Kami Menyediakan banyak agen agen
                        <br />
                        untuk anda bisa lakukan kerja sama untuk
                        <br />
                        menjual hasil dari panen anda
                      </>
                    </Text>
                  </div>
                </div>
                <div className="relative h-[509px] w-full rounded-[16px] bg-white-A700 pt-8 md:h-auto sm:pt-5">
                  <Img
                    src="images/img_iphone_16_476x406.png"
                    alt="iphonesixteen"
                    className="h-[476px] w-full rounded-[16px] object-cover"
                  />
                  <div className="absolute left-0 right-0 top-[6%] m-auto flex w-[82%] flex-col items-center gap-3">
                    <div className="flex items-start gap-2">
                      <Img src="images/img_save.svg" alt="save_one" className="h-[24px] w-[24px]" />
                      <Heading size="lg" as="h4" className="!font-semibold !text-black-900">
                        <span className="font-bold text-black-900">Panduan&nbsp;</span>
                        <span className="font-bold text-indigo-A400">AI</span>
                      </Heading>
                    </div>
                    <Text size="xs" as="p" className="text-center">
                      <>
                        Panduan AI yang telah disesuaikan dengan <br />
                        kebutuhan anda, mulai dari modal, lokasi, dll.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* faq section */}
            <div className="container-sm mt-[126px] flex flex-col items-center gap-[84px] md:gap-[63px] md:p-5 sm:gap-[42px]">
              <div className="flex flex-col items-center gap-2">
                <Heading size="3xl" as="h1" className="tracking-[-0.21px] !text-black-900">
                  <span className="text-black-900">Frequently&nbsp;</span>
                  <span className="text-indigo-A400">Asked</span>
                  <span className="text-black-900">&nbsp;Questions</span>
                </Heading>
                <Text as="p">Berikut merupakan pertanyaan pertanyaan terkait platform kami</Text>
              </div>
              <div className="grid grid-cols-3 justify-center gap-[17px] self-stretch md:grid-cols-2 sm:grid-cols-1">
                {data.map((d, index) => (
                  <div key={"landing" + index} className="flex w-full flex-col">
                    <div className="rounded-tl-[12px] rounded-tr-[12px] bg-gray-200 p-8 sm:p-5">
                      <Heading size="xl" as="h3" className="my-[18px] tracking-[-0.14px] !text-gray-800">
                        {d.platformini}
                      </Heading>
                    </div>
                    <div className="flex rounded-bl-[12px] rounded-br-[12px] border-[3px] border-solid border-gray-200 p-[29px] sm:p-5">
                      <Text as="p" className="w-[97%]">
                        {d.description}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* partners section */}
            <div className="container-sm mt-[134px] px-[91px] md:p-5 md:px-5">
              <div className="flex flex-col items-center gap-[38px]">
                <Text size="md" as="p" className="!text-blue_gray-900">
                  <span className="text-blue_gray-900">Berikut merupakan&nbsp;</span>
                  <span className="font-bold text-indigo-A400">Partner</span>
                  <span className="text-blue_gray-900">&nbsp;yang bekerja sama dengan kami</span>
                </Text>
                <div className="flex items-center gap-[38px] self-stretch md:flex-col">
                  <div className="w-[14%] p-2.5 md:w-full">
                    <Img
                      src="images/img_kementerian_kelautan.png"
                      alt="kementerian_one"
                      className="h-[124px] w-[124px] object-cover"
                    />
                  </div>
                  <div className="flex flex-1 items-center gap-[38px] md:flex-col md:self-stretch">
                    <div className="flex flex-1 items-center gap-[46px] md:flex-col md:self-stretch">
                      <Img
                        src="images/img_kementerian_bumn.png"
                        alt="kementerian"
                        className="h-[95px] w-[27%] object-cover md:w-full"
                      />
                      <Img
                        src="images/img_kementerian_perdagangan.png"
                        alt="kementerian"
                        className="h-[121px] w-[121px] object-cover md:w-full"
                      />
                      <Img
                        src="images/img_openai_1.png"
                        alt="openaione_one"
                        className="h-[121px] w-[45%] object-cover md:w-full"
                      />
                    </div>
                    <Img
                      src="images/img_google_bard_1.png"
                      alt="googlebardone"
                      className="h-[118px] w-[23%] object-cover md:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* call to action section */}
            <div className="container-xs relative mt-[85px] h-[295px] rounded-[24px] bg-gray-900 pt-[5px] md:p-5">
              <div className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[290px] w-[47%]">
                <Img
                  src="images/img_vector_2.png"
                  alt="vectortwo_one"
                  className="absolute bottom-[0.00px] left-[6.00px] m-auto h-[260px] w-[48%] object-cover"
                />
                <Img
                  src="images/img_macbook_pro_16.png"
                  alt="macbookprosixte"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[287px] w-full rounded-[12px] object-cover"
                />
              </div>
              <div className="absolute right-[0.00px] top-[5.00px] m-auto h-[238px] w-[51%] md:h-auto">
                <div className="flex w-full flex-col items-start">
                  <div className="flex items-center self-stretch md:flex-col">
                    <Heading
                      size="2xl"
                      as="h2"
                      className="relative z-[2] mb-[26px] w-[72%] self-end !font-bold tracking-[-0.16px] md:w-full"
                    >
                      <>
                        Ayo Mulai Bangun Bisnis
                        <br />
                        Budidaya Anda Sekarang!
                      </>
                    </Heading>
                    <Img
                      src="images/img_group_5.png"
                      alt="image_one"
                      className="relative ml-[-83px] h-[204px] w-[204px] object-cover md:ml-0 md:w-full"
                    />
                  </div>
                  <Button
                    color="indigo_A400"
                    size="xs"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_arrowleft_white_a700_16x16.svg"
                        alt="arrow_left"
                        className="h-[16px] w-[16px]"
                      />
                    }
                    className="relative mt-[-6px] min-w-[157px] gap-1.5 !rounded-[20px] font-medium sm:px-5"
                  >
                    Mulai Sekarang
                  </Button>
                </div>
                <div className="absolute left-[0.00px] top-[21%] m-auto flex items-center gap-2">
                  <Img src="images/img_user.svg" alt="user_one" className="h-[26px] w-[26px]" />
                  <Heading as="h5" className="text-center !font-bold">
                    Fishbiz
                  </Heading>
                </div>
              </div>
            </div>
          </div>

          {/* footer section */}
          <footer className="mt-[269px] flex items-end justify-center bg-gray-900 py-[67px] md:py-5">
            <div className="container-xs mt-[57px] flex justify-center md:p-5">
              <div className="flex w-full flex-col items-start gap-[41px]">
                <div className="relative h-[194px] w-[83%]">
                  <Img
                    src="images/img_footer_logo.png"
                    alt="footerlogo_one"
                    className="absolute left-[0.00px] top-[1.20px] m-auto h-[48px] w-[16%] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-center justify-center md:relative md:flex-col">
                    <Text as="p" className="mb-[95px] w-[41%] self-end leading-[125%] !text-white-A700_cc md:w-full">
                      Merupakan Platform Panduan untuk mengembangkan usaha budidaya ikan
                    </Text>
                    <div className="relative ml-[-8px] flex flex-1 items-center justify-between gap-5 md:ml-0 md:self-stretch sm:flex-col">
                      <div className="flex flex-col items-start gap-[29px]">
                        <Heading as="h5">Home</Heading>
                        <ul className="flex flex-col items-start gap-[29px]">
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                Solution
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                How to use?
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                Premium
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start gap-[29px] self-start">
                        <Heading as="h5">Download</Heading>
                        <ul className="flex flex-col items-start gap-[29px]">
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                For Windows
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                For Mobile
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start gap-[29px]">
                        <Heading as="h5">Support</Heading>
                        <ul className="flex flex-col items-start gap-[29px]">
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                Telephon
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                Email
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                Whatsapp
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start gap-[29px]">
                        <Heading as="h5">About</Heading>
                        <ul className="flex flex-col items-start gap-[29px]">
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                About Us
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                AI
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <Text as="p" className="!text-white-A700_cc">
                                Workflow
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="white_A700_11"
                    shape="circle"
                    className="absolute bottom-[21.80px] left-[0.00px] m-auto w-[44px] !rounded-[22px]"
                  >
                    <Img src="images/img_google.svg" />
                  </Button>
                  <Button
                    color="white_A700_11"
                    shape="circle"
                    className="absolute bottom-[21.80px] left-[6%] m-auto w-[44px] !rounded-[22px]"
                  >
                    <Img src="images/img_call.svg" />
                  </Button>
                  <Button
                    color="white_A700_11"
                    shape="circle"
                    className="absolute bottom-[21.80px] left-[12%] m-auto w-[44px] !rounded-[22px]"
                  >
                    <Img src="images/img_info.svg" />
                  </Button>
                  <Button
                    color="white_A700_11"
                    shape="circle"
                    className="absolute bottom-[21.80px] left-[18%] m-auto w-[44px] !rounded-[22px]"
                  >
                    <Img src="images/img_facebook.svg" />
                  </Button>
                </div>
                <div className="h-px w-full self-stretch bg-white-A700_33" />
                <div className="flex items-center justify-between gap-5 self-stretch md:flex-col">
                  <Text as="p" className="self-end !text-white-A700_cc">
                    <span className="text-white-A700_cc">©&nbsp;</span>
                    <span className="text-indigo-A400">Bintang 2024, All right reserved</span>
                  </Text>
                  <ul className="flex flex-wrap">
                    <li>
                      <a href="#">
                        <Heading size="s" as="h6" className="!text-blue_gray-100">
                          Home
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="ml-[29px]">
                        <Heading size="s" as="h6" className="!text-blue_gray-100">
                          Panduan AI
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="ml-[39px]">
                        <Heading size="s" as="h6" className="!text-blue_gray-100">
                          Pemasaran
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="ml-[39px]">
                        <Heading size="s" as="h6" className="!text-blue_gray-100">
                          Bantuan
                        </Heading>
                      </a> 
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* floating action button section */}
        <button className="absolute bottom-[7%] right-[9%] m-auto h-[62px] w-[4%] rounded-[31px] border border-solid border-white-A700 flex items-center justify-center"
                           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/images/up-arrow.png" alt="gambargaruda" style={{ width: '50%', height: '50%', borderRadius: '50%' }} />
        </button>
        <div >
          
        </div>
      </div>
    </>
  );
}
