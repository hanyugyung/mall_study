import React, { useState } from 'react';
import styles from '../../css/itemAddComponent.module.css';
import * as itemService from "../../service/itemService";

const ItemAddComponent = (props) => {
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  /**
   * 카테고리 선택 다이얼로그 오픈
   */
  const openCategory = () => {
    alert("개발중")
  };
  /**
   * 이미지 업로드
   */
  const uploadImage = () => {
    alert("i2");
  };
  /**
   * 파일 등록
   */
  const btnSave = async () => {
    console.log(imageFile);
    let rt = await itemService.postItem(imageFile);
    if (rt.data.rtCode == "A200000") {
      alert("상품이 등록되었습니다.");
    } else {
      alert("서버와의 통신에 실패하였습니다. 잠시 후 다시 시도해 주십시오.");
    }

  };
  /**
   * 파일 업로드
   */
  const handleFileInput = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImageFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
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
            <div className={styles.row_box_image}>
              <div className={styles.row_box_image_thumbnali}></div>
              <div className={styles.row_box_image_add} onClick={uploadImage}>
                <p>대표이미지<span>+</span></p>
              </div>
            </div>
            <div className={styles.row_box_image}>
              <div className={styles.row_box_image_thumbnali}></div>
              <div className={styles.row_box_image_add} onClick={uploadImage}>
                <p>추가이미지<span>+</span></p>
              </div></div>
            <div className={styles.row_box_image}>소분류</div>
            <div className={styles.row_box_image}>세분류</div>
          </div>
        </div>
      </div>
      {/* 상품이미지 E */}
      <input multiple="multiple" type="file" name="files" onChange={e => handleFileInput(e)} />
      {<img src={imagePreviewUrl} />}
      <button onClick={btnSave} >등록</button>
    </div>
  );
};

export default ItemAddComponent;