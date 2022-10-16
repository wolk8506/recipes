import { Header } from 'components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { Coctails } from 'components/Cocktail/cocktails';
import { Coctail } from 'components/Cocktail/cocktail';
import { Home } from 'components/Home';
import { Cakes } from 'components/Сake/cakes';
import { Cake } from 'components/Сake/cake';
import { Meat } from 'components/Meat/meat';
import { Meats } from 'components/Meat/meats';
import { Soup } from 'components/Soup/soup';
import { Soups } from 'components/Soup/soups';
import { Salad } from 'components/Salad/salad';
import { Salads } from 'components/Salad/salads';
import { Desert } from 'components/Desert/desert';
import { Deserts } from 'components/Desert/deserts';
import { Zakuski } from 'components/Zakuski/zakuski';
import { Zakuskis } from 'components/Zakuski/zakuskis';
import { Sousy } from 'components/Sousy/sousy';
import { Sousys } from 'components/Sousy/sousys';
import { Zagotovki } from 'components/Zagotovki/zagotovki';
import { Zagotovkis } from 'components/Zagotovki/zagotovkis';

export const App = () => {
  return (
    <Suspense fallback="Load...">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<Coctails />} />
        <Route path="/cocktails/:cocktailID" element={<Coctail />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/cakes/:cakeID" element={<Cake />} />
        <Route path="/meat" element={<Meats />} />
        <Route path="/meat/:meatID" element={<Meat />} />
        <Route path="/soup" element={<Soups />} />
        <Route path="/soup/:soupID" element={<Soup />} />
        <Route path="/salad" element={<Salads />} />
        <Route path="/salad/:saladID" element={<Salad />} />
        <Route path="/desert" element={<Deserts />} />
        <Route path="/desert/:desertID" element={<Desert />} />
        <Route path="/zakuski" element={<Zakuskis />} />
        <Route path="/zakuski/:zakuskiID" element={<Zakuski />} />
        <Route path="/sousy" element={<Sousys />} />
        <Route path="/sousy/:sousyID" element={<Sousy />} />
        <Route path="/zagotovki" element={<Zagotovkis />} />
        <Route path="/zagotovki/:zagotovkiID" element={<Zagotovki />} />
      </Routes>
    </Suspense>
  );
};
