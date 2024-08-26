import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* -------- Product Data -------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* -------- Product Images -------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* -------- Product Info -------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 h-auto" />
            <img src={assets.star_icon} alt="" className="w-3 h-auto" />
            <img src={assets.star_icon} alt="" className="w-3 h-auto" />
            <img src={assets.star_icon} alt="" className="w-3 h-auto" />
            <img src={assets.star_dull_icon} alt="" className="w-3 h-auto" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Seleccionar tamaño</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            AÑADIR AL CARRITO
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Producto original.</p>
            <p>Reembolso disponible para este producto.</p>
            <p>Política de devolución y cambio, plazo de 35 miutos.</p>
          </div>
        </div>
      </div>

      {/* -------- Description & Review Section -------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Descripción</b>
          <p className="border px-5 py-3 text-sm">Reseñas (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Un catálogo y sección de productos en un sitio web es una vitrina digital que presenta
            de manera organizada y atractiva la variedad de productos disponibles para la venta.
            Esta sección permite a los usuarios explorar, filtrar y seleccionar artículos según sus
            preferencias, facilitando la experiencia de compra en línea. Los catálogos proporcionan
            información detallada, imágenes de alta calidad y opciones de comparación, ayudando a
            los clientes a tomar decisiones informadas. Además, reflejan la diversidad y amplitud de
            la oferta del negocio, siendo esenciales para captar la atención del consumidor y
            fomentar las compras.
          </p>
          <p>
            Los catálogos y secciones de productos en sitios web presentan productos de manera
            detallada, incluyendo descripciones exhaustivas, (imágenes, precios, y opciones
            disponibles como tamaños). Cada producto cuenta con una página dedicada donde los
            usuarios pueden obtener toda la información relevante, facilitando una navegación clara
            y una experiencia de compra personalizada y eficiente. Estas secciones son cruciales
            para destacar las características de los productos y ayudar a los clientes a encontrar
            exactamente lo que buscan.
          </p>
        </div>
      </div>

      {/* -------- display related products -------- */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
