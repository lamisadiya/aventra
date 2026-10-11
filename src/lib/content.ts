export const restaurant = {
  name: "Aventra",
  tagline: "Beyond Taste, Freshness in Every Choice.",
  partner: "Graphodio",
  address: {
    street: "Banani 11",
    city: "Dhaka",
    country: "Bangladesh",
  },
  email: "aventra@info.com",
  reserveUrl: "/#reserve",
  openingHours: [
    { day: "Monday", time: "11:00 AM To 11:30 PM" },
    { day: "Tuesday", time: "11:00 AM To 11:30 PM" },
    { day: "Wednesday", time: "11:00 AM To 11:30 PM" },
    { day: "Thursday", time: "11:00 AM To 11:30 PM" },
    { day: "Friday", time: "11:00 AM To 11:30 PM" },
    { day: "Saturday", time: "11:00 AM To 11:30 PM" },
    { day: "Sunday", time: "11:00 AM To 11:30 PM" },
  ],
};

export const hero = {
  headline: "Beyond Taste, Freshness in Every Choice.",
  subline: "You eat every day—make it a better choice.",
};


export const introSection = {
  body:
    "You eat every day—make it a better choice. Food is a part of our everyday life. But every meal is also a choice.",
};

export const dreamSection = {
  eyebrow: "Our Dream",
  headline:
    "To create a dining experience where taste, freshness, balance, and safety come together.",
  body:
    "What we put into our food, how we prepare it, and what we serve to the people we care about—these are what give food its true value.\n\nBecause we believe great food is not simply about how delicious it tastes—it is also about feeling good about the choice you have made.",
};

export const commitmentSection = {
  eyebrow: "Our Commitment",
  title: "Our Commitment",
  pillars: [
    {
      title: "In Our Food",
      body: "Fresh, quality ingredients. Balanced use of salt and sugar. Careful attention to taste and balance.",
    },
    {
      title: "In Our Beverages",
      body: "The natural taste and freshness of fresh fruits. No artificial preservatives or unnecessary chemicals, with controlled sugar.",
    },
    {
      title: "In Our Kitchen",
      body: "Modern technology, controlled cooking, and measures designed to reduce fire risk—because a safe kitchen is the foundation of better food.",
    },
  ],
};

export const corporateDining = {
  eyebrow: "Corporate Dining",
  headline: "Good food brings people together.",
  body:
    "For your team, your meetings, and your business moments, AVENTRA offers exclusive corporate dining privileges—designed to make every visit more rewarding.",
  privilegesLabel: "Corporate Privileges",
  privileges: [
    "Special Dining Offers",
    "Corporate Lunch",
    "Business Dining",
    "Group Booking Benefits",
  ],
  ctaLabel: "Enquire about corporate dining",
};

export const philosophy = {
  eyebrow: "Our Philosophy",
  headline: "We do not claim perfection.",
  body:
    "We believe true quality is built through the commitment to do a little better every day.\n\nTo make tomorrow’s food better than today’s—that is the AVENTRA way.",
  closing: [
    "Because we believe—",
    "The choices you make about your food are an expression of how you care for yourself.",
    "And in those thoughtful choices, AVENTRA strives to become a name you can trust.",
  ],
};



export type MenuItem = {
  id: string;
  name: string;
  description: string;
 
  price: string;
  image: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  tagline: string;
  note?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    tagline: "Light beginnings to wake up the palate.",
    items: [
      {
        id: "Golden-Crispy-Potato-Wedges",
        name: "Golden Crispy Potato Wedges",
        description:
          "Golden and Crispy potato  wedges, seasoned with aromatic herbs nd spices and fried to perfection, with a crunchy exterior and soft, fluffy center - served with House-Special Dip",
        price: "290",
        image: "/images/1.jpeg",
      },
      {
        id: "Grilled-Chicken-Quesadila-with-Mexican-Salsa",
        name: "Grilled Chicken Quesadila with Mexican Salsa",
        description:
          "A delicious Mexican-style tortilla filled with seasoned grilled chicken, melted cheese, sauteed vegetables, and aromatic herbs, folded and toasted until golden and crispy-served with Mexican salsa",
        price: "650",
        image: "/images/2.jpeg",
      },
      {
        id: "Fiery-Garlic-Butter-Mushrooms",
        name: "Fiery Garlic Butter Mushrooms",
        description:
          "Fresh mushrooms sauteed with garlic, chili, herbs, and aromatic spices, creating a flavorful dish with a perfect balance of spicy,savory and garlicky notes",
        price: "590",
        image: "/images/3.jpeg",
      },
      {
        id: "Crispy-Thai-Spiced-Fried-Chicken",
        name: "Crispy Thai-Spiced Fried Chicken",
        description:
          "Two tender chicken pieces marinated with Thai herbs and spices, coated in a light, crispy batter and fried until golden and crunchy,delivering a savory, aromatic, and mildly spicy Thai-inspired flavor-served with sweet chili dipping sauce",
        price: "350",
        image: "/images/f2.jpg",
      },
      {
        id: "Salt-&-Pepper-Calamari",
        name: "Salt & Pepper Calamari",
        description:
          "Tender calamari lightly coated and fried until golden and crispy,then tossed with cracked black pepper,sea salt, garlic,chili, and fresh herbs for a simple yet flavorful finish - served with tartar sauce",
        price: "790",
        image: "/images/f2.jpg",
      },
    ],
  },
  {
    id: "Soup-&-Pasta",
    label: "Soup & Pasta",
    tagline: "Balanced plates, cooked with control.",
    items: [
      {
        id: "Zesty-Mexican-Chicken-&-Garden-Vegetable-Soup",
        name: "Zesty Mexican Chicken & Garden Vegetable Soup",
        description:
          "A hearty Mexican-style soup made with tender chicken,fresh vegetables,aromatic herbs,garlic, and a mild lemony flavor- a comforting and wholesome soup with a light yet rich broth.",
        price: "550",
        image: "/images/f1.jpg",
      },
      {
        id: "Silken-Chicken-&-Forest-Mushroom-Soup-with-Garlic-Bread",
        name: "Silken Chicken & Forest Mushroom Soup with Garlic Bread",
        description:
          "A rich and velvety soup prepared with tender chicken,fresh mushrooms,cream,aromatic herbs, and a touch of garlic, offering a smooth, comforting, and savory flavor",
        price: "650",
        image: "/images/f2.jpg",
      },
      {
        id: "Aventra-Signature-Thai-Coconut-Soup",
        name: "Aventra Signature Thai Coconut Soup",
        description:
          "A fragrant and creamy Thai-style soup made with coconut milk, aromatic herbs, fried onion, fried garlic, fresh vegetables, chili, lime, and boiled thin noodles with traditional Thai spices-a perfect balance of creamy, spicy, tangy and savory flavors.",
        price: "690",
        image: "/images/f2.jpg",
      },
      {
        id: "Ocean's-Catch-Seafood-Chowder",
        name: "Ocean's Catch Seafood Chowder",
        description:
          "A rich and creamy soup prepared with assorted fresh seafood, vegetables, herbs, and a delicate creamy broth, offering a hearty, comforting and savory seafood flavor.",
        price: "690",
        image: "/images/f1.jpg",
      },
      {
        id: "Peri-Peri-Chicken-Penne",
        name: "Peri-Peri Chicken Penne",
        description:
          "Penne pasta tossed with tender grilled chicken, peri-peri sause, garlic, herbs, and sauteed vegetables, delivering a delicious combination of creamy, smoky, spicy, and savory flavors.",
        price: "690",
        image: "/images/f1.jpg",
      },
      {
        id: "Classic-Fettuccine-Alfredo",
        name: "Classic Fettuccine Alfredo",
        description:
          "Classic Fettuccine pasta tossed in a rich and creamy Alfredo sause made with butter, cream, garlic, and Parmesan cheese, finished with fresh herbs for a smooth, indulgent, and savory flavor.",
        price: "790",
        image: "/images/f1.jpg",
      },
      {
        id: "Beef-Stroganoff",
        name: "Beef Stroganoff",
        description:
          "Tender strips of beef and sauteed mushrooms cooked in a rich, creamy and savory sauce with onion, garlic, mustard and aromatic herbs, creating a classic comforting dish with deep, balanced flavors.",
        price: "950",
        image: "/images/f1.jpg",
      },
      {
        id: "Mediterranean-Seafood-Linguine",
        name: "Mediterranean Seafood Linguine",
        description:
          "Linguine pasta tossed with fresh mixed seafood, garlic, herbs, tomatoes, and a light creamy or tomato-based sauce, creating a flavorful combination of savory, aromatic and delicate seafood notes.",
        price: "950",
        image: "/images/f1.jpg",
      },
    ],
  },
  {
    id: "Fresh-Salads",
    label: "Fresh Salads",
    tagline: "Balanced plates, cooked with control.",
    items: [
      {
        id: "Chicken-&-Cashew-Nut-Salad",
        name: "Chicken & Cashew Nut Salad",
        description:
          "A fresh and wholesome salad featuring tender grilled chicken, crisp lettuce, fresh vegetables, roasted cashew nuts, and aromatic herbs, tossed in a light and flavourful dressing for a satisfying balance of crunchy, savory, and refreshing flavors.",
        price: "690",
        image: "/images/f1.jpg",
      },
      {
        id: "Classic-Caesar-Chicken-Salad",
        name: "Classic Caesar Chicken Salad",
        description:
          "A classic Caesar salad featuring tender grilled chicken, iceberg lettuce, Parmesan cheese, and crunchy garlic croutons, tossed in a creamy and savory Caesar dressing.",
        price: "690",
        image: "/images/f2.jpg",
      },
      {
        id: "Grilled-Beef-Steak-Salad",
        name: "Grilled Beef Steak Salad",
        description:
          "Tender grilled beef steak served over crisp lettuce and fresh seasonal vegetables, tossed with aromatic herbs and a balsamic dressing, creating a satisfying balance of savory, fresh, and zesty flavors.",
        price: "690",
        image: "/images/f2.jpg",
      },
      {
        id: "Wholesome-Quinoa-&-Garden-Vegetable-Salad",
        name: "Wholesome Quinoa & Garden Vegetable Salad",
        description:
          "A healthy and refreshing salad made with fluffy quinoa, crisp lettuce, cucumber, tomato, carrots, sweet corn, and fresh herbs, tossed in a light dressing for a delicious balance of fresh, crunchy, and wholesome flavours.",
        price: "590",
        image: "/images/f1.jpg",
      },
    ],
  },
   {
    id: "Kebab-&-BBQ",
    label: "Kebab & BBQ",
    tagline: "Balanced plates, cooked with control.",
    items: [
      {
        id: "Middle-Eastern-Charcoal-Grilled-Chicken",
        name: "Middle Eastern Charcoal-Grilled Chicken",
        description:
          "Tender whole chicken marinated in aromatic Middle Eastern spices, charcoal-griled to perfection, and served with butter naan, French fries, fresh salad and signature garlic sauce.",
        price: "1150",
        image: "/images/f1.jpg",
      },
      {
        id: "Chicken-Shish-Tawook-Skewers",
        name: "Chicken Shish Tawook Skewers",
        description:
          "Tender chicken skewers marinated in Middle Eastern spices, yogurt, garlic, and herbs, charcoal-grilled to perfection and served with butter naan, French fries, fresh salad and signature garlic sauce.",
        price: "680",
        image: "/images/f2.jpg",
      },
      {
        id: "Chicken-Malai-Kebab",
        name: "Chicken Malai Kebab",
        description:
          "Tender chicken pieces marinated in creamy mala, yogurt, cheese, garlic, and aromatic spices, grilled to perfection and served with butter naan, French fries, fresh salad and signature garlic sauce.",
        price: "680",
        image: "/images/f2.jpg",
      },
      {
        id: "Silky-Chicken-Reshmi-Kebab",
        name: "Silky Chicken Reshmi Kebab",
        description:
          "Tender chicken cubes marinated with creamy cheese, yogurt, garlic, and aromatic spices, swered and grilled to perfection, served with butter naan, French fries, fresh salad and signature garlic sauce.",
        price: "680",
        image: "/images/f1.jpg",
      },
      {
        id: "Charcoal-Grilled-Beef-Adana-Kebab",
        name: "Charcoal-Grilled Beef Adana Kebab",
        description:
          "Juicy minced beef blended with aromatic herbu, garlic, and Middle Eastern spices, charcoal-grilled to perfection, served with butter naan, French fries, fresh salad and signature garlic sauce.",
        price: "950",
        image: "/images/f1.jpg",
      },
      {
        id: "Arabian-Spiced-Beef-Kofta-Tortilla",
        name: "Arabian Spiced Beef Kofta Tortilla",
        description:
          "Juicy seasoned beef kofta wrapped in sort tortilla grilled with aromatic Arabian spices and herbs, served with butter naan, French fries, fresh salad and signature garlic sauce.",
        price: "950",
        image: "/images/f1.jpg",
      },
      {
        id: "Herb-Crusted-Lamb-Chops",
        name: "Herb-Crusted Lamb Chops",
        description:
          "Tender lamb chops mannated with aromatic herba ganic, and Middle Eastern spices geiled to perfection and served with butter naan, French fries, fresh salad and signature garlic sauce.",
        price: "2500",
        image: "/images/f1.jpg",
      },
      {
        id: "Whole-Grilled-Seabass",
        name: "Whole Grilled Seabass (Approx. 600g)",
        description:
          "Fresh whole seabass marinated with smon, genic, herbs, and aromatic spices, grilled to perfection and served with butter naan, French fries, fresh salad and signature garlic sauce.",
        price: "1490",
        image: "/images/f1.jpg",
      },
      {
        id: "Lamb-Shish-Kebab",
        name: "Lamb Shish Kebab",
        description:
          "Tender lamb mince marinated with aromatic herbs and middle Eastern spices and charcoal-grilled to perfection, served with butter naan, and signature garlic sauce.",
        price: "1150",
        image: "/images/f1.jpg",
      },
{
        id: "Peshawari-Style-Chicken-Karahi",
        name: "Peshawari-Style Chicken Karahi",
        description:
          "Tender chicken cooked in a rich tomato, ginger, garlic, and aromatic spice gravy, finished with fresh herbs. Served with butter naan, fresh salad and raita.",
        price: "650",
        image: "/images/f1.jpg",
      },
      {
        id: "Classic-Butter-Chicken",
        name: "Classic Butter Chicken",
        description:
          "Tender chicken simmered in a rich, creamy tomato gravy infused with butter, aromatic spices, and herbs. Served with butter naan, fresh salad and raita.",
        price: "650",
        image: "/images/f1.jpg",
      },
    ],
  },

  {
    id: "main-course",
    label: "Main Course",
    tagline: "Balanced plates, cooked with control.",
    items: [
      {
        id: "Aventra-Signature-Belarusian-Chicken",
        name: "Aventra Signature Belarusian Chicken (1:4)",
        description:
          "Tender whole chicken prepared with Aventra's signature seasoning, served with mildly spiced Mexican rice, herb sauce, fresh seasonal salad, and smoky sausage.",
        price: "2,990",
        image: "/images/1.jpeg",
      },
      {
        id: "Caramelized-Chicken-in-Rich-Brown-Sauce",
        name: "Caramelized Chicken in Rich Brown Sauce",
        description:
          ": Tender pan-seared chicken glazed in a rich brown sauce with caramelized onion and herbs, served with Mexican rice and sautéed vegetables.",
        price: "650",
        image: "/images/2.jpeg",
      },
      {
        id: "Rosemary-Infused-Grilled-Chicken",
        name: "Rosemary-Infused Grilled Chicken",
        description:
          ": Tender grilled chicken infused with fragrant rosemary sauce, garlic, and herbs, served with Mexican rice and sautéed seasonal vegetables.",
        price: "650",
        image: "/images/f2.jpg",
      },
      {
        id: "Herb-Stuffed-Chicken-Ballotine",
        name: "Herb-Stuffed Chicken Ballotine",
        description:
          "Tender chicken roulade stuffed with flavorful herbs and savory filling, gently cooked and finished with a rich sauce, served with mashed potato and sautéed seasonal vegetables.",
        price: "650",
        image: "/images/f1.jpg",
      },
      {
        id: "Smoky-BBQ-Glazed-Chicken",
        name: "Smoky BBQ Glazed Chicken",
        description:
          ": Tender chicken marinated in smoky BBQ spices, grilled to perfection and glazed with rich BBQ sauce, served with roasted garlic potato and sautéed seasonal vegetables.",
        price: "650",
        image: "/images/f1.jpg",
      },
      {
        id: "Peri-Peri-Grilled-Chicken",
        name: "Peri-Peri Grilled Chicken",
        description:
          ": Tender grilled chicken marinated in a bold peri-peri blend of chili, garlic, herbs, and spices, served with Mexican rice, fresh salad, and seasonal vegetables.",
        price: "650",
        image: "/images/f1.jpg",
      },
       {
        id: "Aventra-Monster-Beef-Burger",
        name: "Aventra Monster Beef Burger",
        description:
          "Juicy beef patty layered with melted cheese, lettuce, fresh tomato, onion, and signature sauce, served with crispy potato wedges.",
        price: "790",
        image: "/images/f1.jpg",
      },
      {
        id: "BBQ-Glazed-Beef-Short-Ribs",
        name: "BBQ Glazed Beef Short Ribs",
        description:
          "Slow-cooked tender beef short ribs glazed with smoky BBQ sauce, served with creamy mashed potato and sautéed seasonal vegetables.",
        price: "1190",
        image: "/images/f1.jpg",
      },
      {
        id: "Slow-Cooked-Beef-Brisket",
        name: "Slow-Cooked Beef Brisket",
        description:
          "Slow-cooked tender beef brisket infused with aromatic herbs and spices, served with creamy mashed potato, sautéed seasonal vegetables, and rich brown sauce",
        price: "1190",
        image: "/images/f1.jpg",
      },
      {
        id: "Premium-T-Bone-Steak",
        name: "Premium T-Bone Steak",
        description:
          "Tender, juicy T-bone steak grilled to perfection and seasoned with aromatic herbs and spices, served with mashed potato, sautéed seasonal vegetables, and rich brown sauce",
        price: "2670",
        image: "/images/f1.jpg",
      },
       {
        id: "Premium-Grilled-Ribeye-Steak",
        name: "Premium Grilled Ribeye Steak",
        description:
          "Premium, juicy ribeye steak grilled to perfection with aromatic herbs and spices, served with mashed potato, sautéed seasonal vegetables, and rich brown sauce",
        price: "2550",
        image: "/images/f1.jpg",
      },
      {
        id: "Herb-Stuffed-Beef-Roulade",
        name: "Herb-Stuffed Beef Roulade",
        description:
          "Tender beef rolled with a savory herb and vegetable Alling, slowly cooked to perfection and served with creamy mashed potato, sautéed seasonal vegetables. and rich brown sauce",
        price: "1290",
        image: "/images/f1.jpg",
      },
      {
        id: "Pan-Seared-Salmon-with-Lemon-Herb-Butter",
        name: "Pan-Seared Salmon with Lemon Herb Butter",
        description:
          "Fresh salmon fillet pan-seared to perfection with a golden crust, finished with lemon herb butter, and served with mashed potato and sautéed seasonal vegetables",
        price: "2090",
        image: "/images/f1.jpg",
      },
      {
        id: "Aventra-Signature-Cheese-Crab",
        name: "Aventra Signature Cheese Crab",
        description:
          "Succulent crab meatbaked with creamy melted cheese, garlic, herbs, and signature seasoning served with fresh seasonal salad",
        price: "850",
        image: "/images/f1.jpg",
      },
       {
        id: "Pan-Seared-Fish-Fillet-Steak",
        name: "Pan-Seared Fish Fillet Steak",
        description:
          "Tender fish fillet pan-seared to perfection with herbs, garlic, and lemon butter sauce, served with lemon herb rice and sautéed seasonal vegetables.",
        price: "850",
        image: "/images/f1.jpg",
      },
      {
        id: "Whole-Grilled-White-Snapper",
        name: "Whole Grilled White Snapper",
        description:
          "Fresh whole white snapper mannated with herbs, garlic, lemon, and spices, grilled to perfection and served with fragrant herb rice, fresh seasonal salad and signature sauce",
        price: "1490",
        image: "/images/f1.jpg",
      },
    ],
  },

  {
    id: "desserts",
    label: "Desserts",
    tagline: "A gentle finish, with sugar kept in check.",
    items: [
      {
        id: "Caramelized-Brownie",
        name: "Caramelized Brownie",
        description:
          "Rich, fudgy chocolate brownies with a golden caramelized crust, drizzled with luscious caramel sauce and served with vanilla ice cream for the perfect balance of warm, rich and creamy flavors.",
        price: "450",
        image: "/images/f3.webp",
      },
      {
        id: "chocolate-french-toast",
        name: "Chocolate French Toast",
        description:
          "Brioche soaked in a chocolate-vanilla custard, pan-seared and finished with chocolate sauce, roasted nuts and icing sugar.",
        price: "450",
        image: "/images/f3.webp",
      },
      {
        id: "New-York-Cheesecake",
        name: "New York Cheesecake",
        description:
          "A classic baked cheesecake with a smooth, velvety filling and buttery biscuit crust, served with berry compote and fresh fruit.",
        price: "520",
        image: "/images/f4.webp",
      },
      {
        id: "Royal-Red-Velvet-Cake",
        name: "Royal Red Velvet Cake",
        description:
          "Moist red velvet layered with cream cheese frosting, finished with chocolate shavings and fresh berries.",
        price: "480",
        image: "/images/f4.webp",
      },
      {
        id: "Chocolate-Decadence",
        name: "Chocolate Decadence",
        description:
          "Layers of chocolate sponge and chocolate cream finished with luscious chocolate sauce and shavings.",
        price: "460",
        image: "/images/f4.webp",
      },
    ],
  },
  {
    id: "Platters",
    label: "Platters",
    tagline: "Balanced plates, cooked with control.",
    items: [
      {
        id: "Mixed-Grilled-Platter",
        name: "Mixed Grilled Platter (1:2)",
        description:
          "Chicken Shish Tawook 4 cubes, Chicken Malai Kebab 4 cubes, Spicy Charcoal-Grilled chicken 2 pcs, charcoal-grilled Prawns 2pcs, Mixed Garden Salad, French Fries, Signature Garlic Sauce",
        price: "1650",
        image: "/images/f1.jpg",
      },
      {
        id: "Mixed-Grilled-Platter",
        name: "Mixed Grilled Platter (1:4)",
        description:
          "Chicken Shish Tawook 8 cubes, Chicken Malai Kebab 8 cubes, Spicy Charcoal-Grilled chicken 4 pcs, charcoal-grilled Prawns 4 pcs, Mixed Garden Salad, French Fries, Signature Garlic Sauce",
        price: "2990",
        image: "/images/f2.jpg",
      },
      {
        id: "Assorted-Mixed-Platter",
        name: "Assorted Mixed Platter (1:2)",
        description:
          "Beef Tenderloin steak 2 pcs, Whole Grilled Seabass 1 pc (approx. 600g), Grilled Prawns 2 pcs, Grilled Sausage 2 pcs, Mashed Potato, Seasonal Sauteed Vegetables, Mushroom Sauce, Lemon Butter Sauce",
        price: "4500",
        image: "/images/f2.jpg",
      },
      {
        id: "Assorted-Mixed-Platter",
        name: "Assorted Mixed Platter (1:4)",
        description:
          "Beef Tenderloin steak 4 pcs, Whole Grilled Seabass 2 pc (approx. 600g), Grilled Prawns 4 pcs, Grilled Sausage 4 pcs, Mashed Potato, Seasonal Sauteed Vegetables, Mushroom Sauce, Lemon Butter Sauce",
        price: "7500",
        image: "/images/f1.jpg",
      },
      {
        id: "Chef's-Special-Platter",
        name: "Chef's Special Platter (1:2)",
        description: "Tex-Mex Grilled Chicken 1 pc, BBQ Glazed Chicken 1 pc, Buffalo wings 4 pcs, Assorted Mixed Fried Rice, Seasonal Sauteed Vegetables.",
        price: "1300",
        image: "/images/f3.webp",
      },
      {
        id: "Chef's-Special-Platter",
        name: "Chef's Special Platter (1:4)",
        description: "Tex-Mex Grilled Chicken 2 pc, BBQ Glazed Chicken 2 pc, Buffalo wings 8 pcs, Assorted Mixed Fried Rice, Seasonal Sauteed Vegetables.",
        price: "2500",
        image: "/images/f3.webp",
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    tagline: "The natural taste and freshness of fresh fruits.",
    note: "No artificial preservatives or unnecessary chemicals, with controlled sugar.",
    items: [
      {
        id: "Giner-Fizz",
        name: "Giner Fizz",
        description: "Mocktails",
        price: "348",
        image: "/images/f3.webp",
      },
      {
        id: "Cinnamon-Sour-Martini",
        name: "Cinnamon Sour Martini",
        description: "Mocktails",
        price: "548",
        image: "/images/f3.webp",
      },
      {
        id: "Cardamon-Colada",
        name: "Cardamon Colada",
        description:
          "Mocktails",
        price: "398",
        image: "/images/f4.webp",
      },
      {
        id: "Guava-Inferno",
        name: "Guava Inferno",
        description:
          "Mocktails",
        price: "448",
        image: "/images/f4.webp",
      },
      {
        id: "Nirvana",
        name: "Nirvana",
        description:
          "Mocktails",
        price: "348",
        image: "/images/f4.webp",
      },
      {
        id: "Chili-Guava",
        name: "Chili Guava",
        description:
          "Mocktails",
        price: "380",
        image: "/images/f4.webp",
      },
            {
        id: "Black-Tea",
        name: "Black Tea",
        description: "Tea",
        price: "150",
        image: "/images/f3.webp",
      },
      {
        id: "Green-Tea",
        name: "Green Tea",
        description:
          "Tea",
        price: "150",
        image: "/images/f4.webp",
      },
      {
        id: "Orange-Ice-Tea",
        name: "Orange Ice Tea",
        description:
          "Tea",
        price: "210",
        image: "/images/f4.webp",
      },
      {
        id: "Pineapple-Ice-Tea",
        name: "Pineapple Ice Tea",
        description:
          "Tea",
        price: "210",
        image: "/images/f4.webp",
      },
      {
        id: "Lemon-Ice-Tea",
        name: "Lemon Ice Tea",
        description:
          "Tea",
        price: "170",
        image: "/images/f4.webp",
      },
    ],
  },
];

/* Home page menu teaser */
export const menuSection = {
  number: String(menuCategories.reduce((n, c) => n + c.items.length, 0)),
  numberLabel: "Dishes & drinks",
  body:
    "From appetizers and main courses to desserts and fresh fruit beverages—every item is prepared with fresh, quality ingredients and careful attention to taste and balance.",
  ctaLabel: "View Menu",
};

export const galleryAlt = {
  menu: [
    { src: "/images/1.jpeg", alt: "Herb-crusted grilled lobster with lemon" },
    { src: "/images/2.jpeg", alt: "Seared salmon with saffron emulsion" },
    { src: "/images/3.jpeg", alt: "Fresh mango petals on a stone plate" },
    { src: "/images/4.jpeg", alt: "Garden bloom amuse-bouche on a pedestal" },
  ],
  philosophy: "Fresh mango petals arranged on a plate",
};
