import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { getOneFromProducts } from '../../api/courses';
import { TYPE_COURSES, TYPE_TRACKS, TYPE_BUNDLES, PAGE_ERROR } from '../../constants';
import Course from '../Course';
import Bundle from '../Bundle';
import Track from '../Track';

function Slug() {
  const history = useHistory();
  const { slug } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    // eslint-disable-next-line consistent-return
    const onLoadPage = async () => {
      try {
        const response = await getOneFromProducts(slug);
        const product = response?.data?.data;
        setProduct(product);
        window.dataLayer.push({
          'event': 'productDetail',
          'ecommerce': {
            'detail': {
              'actionField': { 'list': 'Página do produto' },
              'products': [
                {
                  'name': product?.title,
                  'id': product?.id,
                  // eslint-disable-next-line camelcase
                  'price': product?.prices?.sale_price || product?.prices?.price,
                  'brand': 'Descola'
                }
              ]
            }
          }
        });
      } catch (err) {
        return history.push(PAGE_ERROR);
      }
    };
    onLoadPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return (
    <>
      {product && product.type === TYPE_COURSES && <Course product={product} />}
      {product && product.type === TYPE_TRACKS && <Track id={product.id} />}
      {product && product.type === TYPE_BUNDLES && <Bundle id={product.id} />}
    </>
  );
}

export default Slug;
