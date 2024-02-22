import ProductCard from "../components/ProductCard/ProductCard.jsx";

const Products = () => {
  return (
    <section className="flex min-h-screen items-start justify-center md:justify-between p-0">
      <div style={{ marginTop: '60px', marginBottom: '60px' }}>
        <ProductCard />
      </div>
    </section>
  );
};

export default Products;
