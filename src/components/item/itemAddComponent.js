import React from 'react';
import styles from '../../css/itemAddComponent.module.css';

const ItemAddComponent = (props) => {
  /**
   * 카테고리 선택 다이얼로그 오픈
   */
  const openCategory = () => {
    alert("개발중")
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>기본정보</p>
      </div>
      {/* 카테고리 S */}
      <div className={styles.sub_box}>
        <div className={styles.sub_box_title}>카테고리</div>
        <div className={styles.sub_box_content}>
          <input type="text" placeholder="최근 등록한 카테고리 선택" />
          <button type="button" onClick={openCategory} className={styles.button_search}>카테고리검색</button>
          <div className={styles.row_box}>
            <div className={styles.row_box_category}>대분류</div>
            <div className={styles.row_box_category}>중분류</div>
            <div className={styles.row_box_category}>소분류</div>
            <div className={styles.row_box_category}>세분류</div>
          </div>
        </div>
      </div>
      {/* 카테고리 E */}
      {/* 상품명 S */}
      <div className={styles.sub_box}>
        <div className={styles.sub_box_title}>상품명</div>
        <div className={styles.sub_box_content}>
          <input type="text" placeholder="상품명을 입력하세요." />
        </div>
      </div>
      {/* 상품명 E */}
      {/* 상품이미지 S */}
      <div className={styles.sub_box}>
        <div className={styles.sub_box_title}>상품이미지</div>
        <div className={styles.sub_box_content}>
          <div className={styles.row_box}>
            <div className={styles.row_box_image}>대분류</div>
            <div className={styles.row_box_image}>중분류</div>
            <div className={styles.row_box_image}>소분류</div>
            <div className={styles.row_box_image}>세분류</div>
          </div>
        </div>
      </div>
      {/* 상품이미지 E */}
    </div>
  );
};

export default ItemAddComponent;