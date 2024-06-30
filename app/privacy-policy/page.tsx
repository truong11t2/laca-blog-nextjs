import React from 'react'
import Link from '@/components/Link'

export default function page() {
  return (
    <div className="max-w-screen-md container mx-auto pb-6 items-center justify-center">
      <h1 className="text-2xl font-bold leading-8 tracking-tight mb-8">
        CHÍNH SÁCH QUYỀN RIÊNG TƯ
      </h1>
      <div className="mb-8 italic text-right">Sửa đổi lần cuối vào tháng 10 năm 2023</div>
      <p className="mb-8 font-light">
        Nhằm mang lại trải nghiệm tốt nhất cho người dùng trên La Cà (laca.fun), thông tin nhận dạng
        cá nhân hoặc dữ liệu cá nhân của người dùng sẽ được thu thập, sử dụng, tiết lộ, xử lý trong
        khuôn khổ bảo vệ người dùng của La Cà.
      </p>
      <p className="mb-8 font-light">
        La Cà tin rằng người dùng có quyền được biết về các loại dữ liệu cá nhân mà trang web thu
        thập cũng như mục đích sử dụng chúng. Sau khi đọc Chính sách Quyền riêng tư này, người dùng
        sẽ có thể mình tự quyết định việc chia sẻ dữ liệu cá nhân với La Cà. Dữ liệu cá nhân ở đây
        đề cập đến mọi thông tin liên quan đến một thể nhân có thể định danh/nhận dạng được ("Dữ
        liệu cá nhân"). Khi truy cập La Cà, người dùng thừa nhận rằng đã đọc Chính sách Quyền riêng
        tư này và các{' '}
        <Link
          href="/terms-and-conditions"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          Điều Khoản Sử Dụng
        </Link>{' '}
        của La Cà cũng như đã hiểu toàn bộ nội dung và hậu quả của chúng; người dùng đồng ý và chấp
        thuận cho La Cà thu thập, sử dụng, tiết lộ và xử lý Dữ liệu cá nhân theo Chính sách Quyền
        riêng tư này và/hoặc các{' '}
        <Link
          href="/terms-and-conditions"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
        >
          Điều Khoản Sử Dụng
        </Link>
        . Hơn nữa, người dùng cũng thừa nhận rằng toàn bộ Dữ liệu cá nhân mà người dùng đã cung cấp
        hoặc sẽ cung cấp là dữ liệu chính chủ, đúng và chính xác.
      </p>
      <p className="mb-8 font-light">
        Tùy từng thời điểm, La Cà có thể sửa đổi Chính sách Quyền riêng tư này để phản ánh các thay
        đổi về luật pháp và quy định, thông lệ sử dụng của trang web, các tính năng Hệ thống và/hoặc
        các tiến bộ công nghệ. Nếu có phiên bản sửa đổi về chính sách thu thập hoặc sử dụng Dữ liệu
        cá nhân của người dùng thì những nội dung thay đổi sẽ được cập nhật vào Chính sách Quyền
        riêng tư này và ngày hiệu lực sẽ được ghi chú vào phần đầu văn bản. Do đó, quý khách hàng
        nên định kỳ xem lại Chính sách Quyền riêng tư này để cập nhật các chính sách và thông lệ mới
        nhất từ La Cà. Nếu người dùng không đồng ý với bất kỳ thay đổi hoặc sửa đổi nào đối với
        Chính sách Quyền riêng tư, người dùng có quyền rời khỏi La Cà. Người dùng tiếp tục sử dụng
        Hệ thống sau ngày sửa đổi có hiệu lực, thì người dùng sẽ được xem là đã đồng ý và chấp nhận
        sửa đổi của Chính sách Quyền riêng tư.
      </p>
      <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
        Chính sách quyền riêng tư này bao gồm những phần sau:
      </h3>
      <ol className="list-decimal pl-4 pt-4 text-lg">
        <li className="font-bold pb-2">
          Thu thập thông tin
          <div className="pb-4 pt-4 text-base font-light">
            Trong tương lai, La Cà thu thập thông tin khi người dùng đăng ký trên trang web, đăng
            nhập vào tài khoản. Các thông tin thu thập bao gồm họ tên, địa chỉ email, hình đại diện.
          </div>
        </li>
        <li className="font-bold pb-2">
          Sử dụng thông tin
          <div className="pb-4 pt-4 text-base font-light">
            Bất kỳ thông tin La Cà thu thập từ người dùng sẽ được dùng:
            <ul className="list-disc pl-8 pt-4">
              <li>Đáp ứng riêng theo sở thích riêng cũng như trải nghiệm của người dùng</li>
              <li>Cung cấp các nội dung quảng cáo phù hợp</li>
              <li>Cải thiện trang web La Cà</li>
              <li>Cải thiện dịch vụ khách hàng cũng như các yêu cầu trợ giúp từ khách hàng</li>
              <li>Liên hệ với người dùng qua email</li>
              <li>Khảo sát lấy ý kiến người dùng</li>
            </ul>
          </div>
        </li>
        <li className="font-bold pb-2">
          Chính sách thương mại điện tử
          <div className="pb-4 pt-4 text-base font-light">
            La Cà sở hữu duy nhất các thông tin được thu thập trên trang web này. Các thông tin cá
            nhân của người dùng sẽ không được bán, trao đổi cho một bên thứ 3 nào nếu không có sự
            đồng ý từ người dùng.
          </div>
        </li>
        <li className="font-bold pb-2">
          Thông cáo bên thứ 3
          <div className="pb-4 pt-4 text-base font-light">
            La Cà không bán, giao thương hoặc chuyển đổi các thông tin cá nhân cho bên ngoài. Điều
            này không bao gồm các bên thứ 3 đáng tin cậy hỗ trợ La Cà vận hành trang web hoặc dịch
            vụ của La Cà khi mà các đối tác này cũng cam kết bảo mật các thông tin này. La Cà tin
            rằng việc chia sẽ thông tin là cần thiết trong các trường hợp để điều tra, ngăn chặn
            hoặc thực thi các biện pháp chống lại các hoạt động phạm pháp, gian lận đáng ngờ hoặc
            các tình huống có thể dẫn tới các nguy hiểm cho người dùng, các hành động vi phạm điều
            khoản sử dụng hay được yêu cầu bởi pháp luật. Các thông tin không riêng tư mặt khác có
            thể được cung cấp cho bên thứ 3 nhằm mục đích quảng cáo, marketing hoặc mục đích khác.
          </div>
        </li>
        <li className="font-bold pb-2">
          Bảo mật thông tin
          <div className="pb-4 pt-4 text-base font-light">
            La Cà ứng dụng nhiều biện pháp để bảo mật dữ liệu cá nhân người dùng. Cụ thể, La Cà sử
            dụng thuật toán mã hóa cao cấp để bảo mật các lần đăng nhập trực tuyến của người dùng.
          </div>
        </li>
        <li className="font-bold pb-2">
          La Cà có dùng cookies?
          <div className="pb-4 pt-4 text-base font-light">
            Câu trả lời là không, nhưng La Cà có thể sử dụng cookies trong tương lai. Cookies được
            La Cà dự định sử dụng để cải thiện tính tiện dụng. Ngoài ra, cookies giúp theo dõi cũng
            như đáp ứng theo nhu cầu riêng của từng người dùng. Tất cả cookie sử dụng đều không liên
            quan tới các thông tin cá nhân trên trang web La Cà.
          </div>
        </li>
        <li className="font-bold pb-2">
          Hủy nhận thư
          <div className="pb-4 pt-4 text-base font-light">
            La Cà sử dụng địa chỉ email được người dùng cung cấp để gửi các thông tin và cập nhật mà
            người dùng quan tâm như các bài viết mới, quảng cáo... Bất kỳ khi nào người dùng muốn
            hủy nhận thư, người dùng có thể liên lạc với La Cà qua{' '}
            <Link
              href="/contact"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              liên kết này
            </Link>
            .
          </div>
        </li>
        <li className="font-bold pb-2">
          Đồng ý
          <div className="pb-4 pt-4 text-base font-light">
            Bằng cách sử dụng trang web La Cà, người dùng đã đồng ý với chính sách riêng tư này.
          </div>
        </li>
      </ol>
    </div>
  )
}
