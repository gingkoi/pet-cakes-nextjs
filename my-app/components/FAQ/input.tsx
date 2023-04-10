const tabs = [
  "General",
  "Ordering",
  "Cake & Cupcakes",
  "Allergies and Restrictions",
  "Payment and Delivery",
];
const general = [
  {
    question: "Are you AVS Licensed?",
    answer:
      "Yes, we are AVS Licensed. Our kitchen has undergone stringent check by the authorities.",
  },
  {
    question: "Can I visit your store?",
    answer:
      "Petissier is an online store. We do not have any available cakes for browsing or purchasing on site. Our physical address is strictly for picking up of cakes only.",
  },
];

const ordering = [
  {
    question: "How to order?",
    answer:
      "Steps to placing an order with us:\n1. Add items to cart.\n2. Add in any special instructions, select your delivery/pickup time and date, and click 'Check Out'.\n3. Enter your details so that we can contact you regarding the order if necessary.\n4. Select your preferred payment method to make payment.\n5. Confirm your order.\nAnd you're done! Cheers to making an order in 5 simple steps :)",
  },
  {
    question: "How many day I need to order in advance?",
    answer:
      "We bake our treats only after orders are placed and confirmed, therefore our current turnaround time is 2 days from the date the order is placed. Ordering more than 2 days in advance is strongly encouraged though, as we close dates once they are fully booked. Contact us directly for any questions .",
  },
  {
    question: "I already placed my order, how can I know if it is confirmed?",
    answer:
      "If your order was successfully placed, you will receive an automated email confirmation from us within the day. If you don't receive it (and it's not in your spam mail either), please feel free to get in touch with us to check whether we have received it on our end.",
  },
  {
    question: "Disclamer on artwork",
    answer:
      "As cake is done based on artist style manually, there may be slight varient from the pics reference and varied cake to cakes.",
  },
];

const cakes = [
  {
    question: "What are the ingredients used for the cakes and cupcakes?",
    answer:
      "At Petissier, we strive to build beautiful cakes for your furkids. Our cakes are constructed to resemble a human cake with 3 layers of sugarless chiffon cake and 2 layers of meat with soy frosting. Our bakers have specially curated a recipe made from only pet friendly ingredients.\nIngredients:\nSugarless chiffon: Eggs, Rice flour, Corn flour, Vegetable oil, Goat milk powder\nFrosting: Cream cheese, Tofu",
  },
  {
    question: "Protein choices",
    answer:
      "In our cakes, we selected canned wet food. We believe in canned meat for cakes for a few reasons. Firstly, canned meat contains a perfect blend of nutrition for your furkid to have a balanced diet. Secondly, canned meat has already been sterilized. This lets us ensure that all meat that we use are of consistent quality as well as completely free of any pathogens or parasites. Lastly, due to the sterilization in the canning process, this allows our customers to store their cakes for a longer time safely. All our canned wet food are sourced from trusted renown suppliers.\nProBalance: Beef, Lamb\nProDiet: Tuna, Ocean Fish\n\nIf you'd prefer your pet to have a non-canned food diet, kindly pick our salmon, chicken or apple option. Our fresh proteins will be poached upon order. Apples will be slightly poached in light honey.",
  },
  {
    question: "Are the lovely cake colors safe for my furkid?",
    answer:
      "We use a range of high-quality human grade food colourings to achieve our bright colours. Most of our colours are achieved with vegetable/plant base powders and gel food colourings are only used for darker colours such as black, dark brown, etc.",
  },
  {
    question: "Cake weight and sizes",
    answer:
      "Pupcakes:\n-5.5cm cupcake size\nCakes:\n-4 inch (est. 500g)\n-6 inch (est. 1.4kg)m* Weight might vary depending on design\nkindly whatsapp 96970053 (operating hours: 10am-6pm) if you require any assistance.",
  },
  {
    question: "What is the shelf-life of the products?",
    answer:
      "We recommend all our furry customers to consume their cake/pupcake on the day of receiving for the best aesthetic and cake quality. All cakes/pupcakes can be stored in the chiller for up to 2 days. Do not store the cake in the freezer as that will cause cracks on the frosting. We advise our customers to purchase the correct portion to avoid having leftovers.",
  },
  {
    question: "Should I served the cake chilled or warmed?",
    answer:
      "Cakes can be eaten both chilled or warmed (heat up in microwave for 10-15 seconds intervals after portioning).\nOnce thawed/heated up, please consume the cakes immediately, do not store it and keep it for a later time. This is to avoid bacteria growth.",
  },
];

const allergies = [
  {
    question:
      "Are you able to do orders with Special Dietary Needs for Dogs and Cats?",
    answer:
      "Contact us! We want every dog and cat to get the best possible solutions to their dietary limitations, and are always ready, willing, and able to cater to your furry friend's needs.",
  },
];

const payment = [
  {
    question: "What are the accepted mode of payment?",
    answer:
      "Credit/debit card information is always encrypted on our end and we can only see the last four digits of the card number for verification purposes, so fret not as no sensitive data is stored on our servers. We also choose to only work with secured payment gateway providers.\nFor in store transactions, we accept Paynow, Paylah or Cash.",
  },
  {
    question: "How do I select date for Pick up/ Delivery?",
    answer:
      "Your pup's birthday is coming up and you would like to check whether we can deliver the goodies ordered on a particular date.\nWe get that, which is why we have a date type in box on our shopping cart page. Simply click the 'Add to cart' button for any item that you're interested in purchasing (don't worry, clicking the button would not immediately confirm your order, so click away!), and you will be directed to the shopping cart page where you can input type in your preferred delivery dates and times.",
  },
  {
    question: "What are the delivery and or collection service available?",
    answer:
      "Yes you can collect the cake direct from our shop at 253 Joo Chiat Road, Singapore 427507\nOur store operating hours from 10 am to 6 pm Monday to Sunday.\nWe have a dedicated kitchen and design team to meet your urgent request\nPlease check with our friendly Sales personnel , whatsapp sales 1 or sales 2\nOur delivery standard time slot will be :\nDelivery (10am-4pm, no fixed slots)\n\nStandard delivery to Residential address only @ $15/per location\nStandard delivery to special locations (malls, restaurants, hotels, offshore islands, etc) @ $20\n**Our sales team will contact you if there are further charges (depending on location)\n\nHoliday delivery to Residential address only @ $20/per location\nHoliday delivery to special locations (malls, restaurants, hotels, offshore islands, etc) @ $25\n**Our sales team will  contact you if there are further charges (depending on location)",
  },
  {
    question: "Can I cancel / change my order?",
    answer:
      "We will not be accepting any cancellation after order is confirmed. Thus, for changes made to bring your order ahead, you must contact us not later than 48 hours or else we may subject it to an additional charges. Please contact our friendly Sales personnel , whatsapp sales 1 or sales 2",
  },
  {
    question: "What if the delivery is unsuccessful , will there be charges?",
    answer:
      "We will align the delivery time in advance , the delivery timing is 10 am to 6 pm daily,\nGrace of 2-3 hours within the requested timing as our driver cover delivery for several location. However , if due to customer negligent of not having people to receive the cake , the cake will be return to company.\nCustomer can self-collect or arrange for another trip ( extra charges ).",
  },
];

export { general, tabs, ordering, cakes, allergies, payment };
