import React from "react";
import Image from "next/image";
import Socials from "@/components/Socials";

const About = () => {
  return (
    <div className="lg:max-w-[800px] lg:mx-auto font-poppin py-24 px-5 transition_nav">
      <div>
        <h1 className="text-center text-5xl font-bold text-primary">
          About Us
        </h1>
        <p className="text-center text-primary font-semibold text-2xl my-8">
          Who are we?
        </p>
        <p className="text-center">
          Just like you, we are pawrents to a very special furkid, Simba, a red
          Shiba inu. Coming from a family of bakers, we have developed a very
          special pet friendly cake recipe with the ingredients we trust for
          Simba. Seeing how he loves it so much, we decided to share it among
          close friends then all the other furkids too.
        </p>
        <div className="my-10 flex flex-col justify-center items-center">
          <div className="lg:h-[400px] lg:w-[400px] h-[200px] w-[200px] bg-primary rounded-full"></div>
          <p className="text-center text-primary font-semibold text-xl mt-3">
            Mr Simba
          </p>
        </div>
        <h2 className="text-center text-primary font-semibold text-2xl my-8">
          What makes our cakes different?
        </h2>
        <div className="text-center space-y-5">
          <p>
            Started off as bakers (for humans), we construct our cakes the best
            way we know… similarly to a normal cake, our pet cakes have got
            layers of cake with protein layers in between. You’ll be able to see
            the beautiful layers of the cake when you cut it. Our soy-cream
            cheese frosting is absolutely delicious too.
          </p>
          <p>
            At Petissier, we aim to produce cakes that will be memorable to both
            pets and humans. We hope to create special designs which are
            personal to your furkid’s celebration.
          </p>
          <p>
            Every pet is special… that floppy ear, that quirky birthmark and
            that spunky personality. We are able to customise your pet’s
            pawtrait onto the cake to show how special your pet is.
          </p>
        </div>
        <h3 className="text-center text-primary font-semibold text-2xl my-8">
          Milestones
        </h3>
        <p className="text-center">
          We are super grateful to all of our lovely customer’s support. Every
          cake and every order is a milestone to us. We are always excited when
          you guys send us photos and tell us how much your pooch enjoyed
          themselves. We would love to serve smiles more than anything!
        </p>
        <div className="grid md:grid-cols-3 items-center gap-5 my-8">
          <div className="bg-primary w-[200px] h-[300px]"></div>
          <div className="bg-primary w-[200px] h-[300px]"></div>
          <div className="bg-primary w-[200px] h-[300px]"></div>
          <div className="bg-primary w-[200px] h-[300px]"></div>
          <div className="bg-primary w-[200px] h-[300px]"></div>
          <div className="bg-primary w-[200px] h-[300px]"></div>
        </div>
        <p className="text-center">
          Another recent milestone would be that we are featured in Tatler Best
          of Singapore list 2022. We couldn’t be more proud and would like to
          extend our gratitude to our supportive customers. We can only make it
          this far because of YOU! We look forward to serving more smiles and
          meeting more of you.
        </p>
        <Image
          src={"/certificate.png"}
          height={700}
          width={500}
          alt="certificate"
          className="my-8 flex justify-center items-center max-w-[500px] mx-auto md:w-[500px] md:h-[700px] w-[300px] h-[400px]"
        />
        <Socials />
      </div>
    </div>
  );
};

export default About;
