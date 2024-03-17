import React from 'react'
import Link from '@/components/Link'

export default function page() {
  return (
    <div className="max-w-screen-md container mx-auto pb-6 items-center justify-center">
      <h2 className="text-2xl font-bold leading-8 tracking-tight mb-8">ĐIỀU KHOẢN SỬ DỤNG</h2>
      <p className="mb-8 font-light">
        BẠN PHẢI ĐỌC NHỮNG ĐIỀU KHOẢN SỬ DỤNG DƯỚI ĐÂY TRƯỚC KHI SỬ DỤNG TRANG WEB NÀY. VIỆC SỬ DỤNG
        TRANG WEB NÀY XÁC NHẬN VIỆC CHẤP THUẬN VÀ TUÂN THỦ CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN DƯỚI ĐÂY.
      </p>
      <p className="mb-8 font-light">
        Bằng cách truy cập và/hoặc sử dụng La Cà (laca.fun), người truy cập, người dùng hoặc người
        dùng đã đăng ký (gọi tắt là "người dùng") thừa nhận đã đọc, hiểu và đồng ý chịu sự ràng buộc
        bởi các Điều Khoản Sử Dụng được quy định dưới đây.
      </p>
      <p className="mb-8 font-light">
        Người dùng có thể tham khảo thêm Chính sách riêng tư tại{' '}
        <Link
          href="/privacy-policy"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          đây
        </Link>
        .
      </p>
      <p className="mb-4 font-light">
        Xin lưu ý rằng La Cà có thể thay đổi, sửa đổi, bổ sung và loại bỏ các Điều Khoản này vào bất
        cứ thời điểm nào mà không cần thông báo trước. Người dùng phải đọc các Điều Khoản này một
        cách định kỳ. Bằng việc tiếp tục truy cập La Cà sau khi đã có những thay đổi đối với các
        Điều Khoản, người dùng đồng ý và chấp thuận với những thay đổi đó.
      </p>
      <ol className="list-decimal pl-4 pt-4 text-lg">
        <li className="font-bold pb-2">
          Lời khuyên du lịch
          <div className="pb-4 pt-4 text-base font-light">
            La Cà chỉ là nơi cung cấp thông tin, hoặc những chia sẻ để người dùng có thêm thông tin
            khi du lịch đến những địa điểm được đề cập trên La Cà. Người dùng có toàn quyền quyết
            định và chịu trách nhiệm về những quyết định của mình khi du lịch. Bằng cách đề cập các
            điểm đến cụ thể, La Cà không tuyên bố hoặc bảo đảm rằng việc đến các điểm này là nên
            hoặc không có rủi ro và La Cà không chịu trách nhiệm pháp lý về thiệt hại hay tổn thất
            có thể xảy ra do việc du lịch đến các địa điểm đó. Trong mọi trường hợp La Cà sẽ không
            chịu trách nhiệm pháp lý về bất kỳ sự cố bất lợi xảy ra trong suốt chuyến đi hoặc sự lưu
            trú của người dùng. Người dùng tự chịu trách nhiệm về việc lựa chọn chuyến du lịch, lộ
            trình và điểm đến, cho toàn bộ hành trình của người dùng.
          </div>
        </li>
        <li className="font-bold pb-2">
          Tương tác trên La Cà
          <div className="pb-4 pt-4 text-base font-light">
            Tất cả những bài viết, bình luận từ người dùng phải tuân thủ những quy định về pháp luật
            của Nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam và nước sở tại của người dùng.
          </div>
          <div className="pb-4 pt-4 text-base font-light">
            Những bài viết, bình luận không được vi phạm thuần phong mỹ tục của Việt Nam, tôn trọng
            những cá nhân, tổ chức, tập thể. La Cà không chấp nhận những nội dung đả kích chính trị,
            tôn giáo. Bài viết, bình luận không được xúc phạm bất kỳ cá nhân, tập thể hay bên thứ
            ba, không dùng từ ngữ thiếu chuẩn mực. Ban quản trị La Cà có quyền xem xét và đánh giá
            bài viết, bình luận có vi phạm những điều trên hay không. Nếu vi phạm người dùng có thể
            bị cấm đăng bài, bình luận và những bài viết, bình luận vi phạm sẽ bị loại bỏ.
          </div>
        </li>
      </ol>
    </div>
  )
}
