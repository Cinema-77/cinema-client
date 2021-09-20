import React, { useState } from 'react';
import * as S from './MovieDetail.style';
import toggle from '@/assets/img/toggle.png';
interface MovieDetailProps {}

export const MovieDetail: React.FC<MovieDetailProps> = () => {
  const [detail, setDetail] = useState(false);
  const [fontWeight, setFontWeight] = useState(false);

  return (
    <S.MovieDetail>
      <div className="container">
        <S.MovieTitle>Nội Dung Phim</S.MovieTitle>
        <S.MovieList>
          <S.MovieIMG>
            <img
              src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/g/o/godzilla_vs_1_.jpg"
              alt=""
            />
          </S.MovieIMG>
          <S.MovieContent>
            <S.MovieContentTitle>Godzilla Vs. Kong</S.MovieContentTitle>
            <S.MovieContentList>
              <S.MovieContentItem>Đạo diễn:</S.MovieContentItem>
              <S.MovieContentItem>Adam Wingard</S.MovieContentItem>
            </S.MovieContentList>
            <S.MovieContentList>
              <S.MovieContentItem>Diễn viên:</S.MovieContentItem>
              <S.MovieContentItem>
                Millie Bobby Brown, Alexander Skarsgård, Rebecca Hall, Eiza González, Kyle Chandler
              </S.MovieContentItem>
            </S.MovieContentList>
            <S.MovieContentList>
              <S.MovieContentItem>Thể loại:</S.MovieContentItem>
              <S.MovieContentItem>Hành Động, Thần thoại</S.MovieContentItem>
            </S.MovieContentList>
            <S.MovieContentList>
              <S.MovieContentItem>Khởi chiếu:</S.MovieContentItem>
              <S.MovieContentItem>26/03/2021</S.MovieContentItem>
            </S.MovieContentList>
            <S.MovieContentList>
              <S.MovieContentItem>Thời lượng:</S.MovieContentItem>
              <S.MovieContentItem>113 phút</S.MovieContentItem>
            </S.MovieContentList>
            <S.MovieContentList>
              <S.MovieContentItem>Ngôn ngữ:</S.MovieContentItem>
              <S.MovieContentItem>
                Tiếng Anh - Phụ đề Tiếng Việt, Phụ đề Tiếng Hàn - Tiếng Việt
              </S.MovieContentItem>
            </S.MovieContentList>
            <S.MovieContentList>
              <S.MovieContentItem>Rated:</S.MovieContentItem>
              <S.MovieContentItem style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>
                C13 - PHIM CẤM KHÁN GIẢ DƯỚI 13 TUỔI
              </S.MovieContentItem>
            </S.MovieContentList>
            <S.MovieContentBtn to="">Mua Vé</S.MovieContentBtn>
          </S.MovieContent>
        </S.MovieList>
        <S.MovieTrailer>
          <S.MovieTrailerTitle>
            {!fontWeight && (
              <S.MovieTrailerSpan>
                <img src={toggle} alt="" />
              </S.MovieTrailerSpan>
            )}
            <S.MovieTrailerSpan
              fW={!fontWeight}
              onClick={() => {
                setFontWeight(false);
                setDetail(false);
              }}
            >
              Chi tiết
            </S.MovieTrailerSpan>
            <S.MovieTrailerSpan>|</S.MovieTrailerSpan>
            {fontWeight && (
              <S.MovieTrailerSpan>
                <img src={toggle} alt="" />
              </S.MovieTrailerSpan>
            )}
            <S.MovieTrailerSpan
              fW={fontWeight}
              onClick={() => {
                setFontWeight(true);
                setDetail(true);
              }}
            >
              Trailer
            </S.MovieTrailerSpan>
          </S.MovieTrailerTitle>
          {!detail && (
            <S.MovieTrailerContent>
              Khi hai kẻ thù truyền kiếp gặp nhau trong một trận chiến ngoạn mục, số phận của cả thế
              giới vẫn còn bị bỏ ngỏ… Bị đưa khỏi Đảo Đầu Lâu, Kong cùng Jia, một cô bé mồ côi có
              mối liên kết mạnh mẽ với mình và đội bảo vệ đặc biệt hướng về mái nhà mới. Bất ngờ,
              nhóm đụng độ phải Godzilla hùng mạnh, tạo ra một làn sóng hủy diệt trên toàn cầu. Thực
              chất, cuộc chiến giữa hai kẻ khổng lồ dưới sự thao túng của các thế lực vô hình mới
              chỉ là điểm khởi đầu để khám phá những bí ẩn nằm sâu trong tâm Trái đất.
            </S.MovieTrailerContent>
          )}
          {detail && (
            <S.MovieTrailerVideo>
              <S.MovieTrailerVideoVideo
                frameBorder="0"
                allowFullScreen
                src="https://www.youtube.com/embed/yFpuUGFS1Kg"
              ></S.MovieTrailerVideoVideo>
            </S.MovieTrailerVideo>
          )}
        </S.MovieTrailer>
      </div>
    </S.MovieDetail>
  );
};
