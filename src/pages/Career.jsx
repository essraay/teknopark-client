const Career = () => {
  document.querySelectorAll(".k-item .k-title").forEach((item) => {
    item.addEventListener("click", (event) => {
      let body = item.parentElement.querySelector(".k-body")
      if (body.classList.contains("show")) body.classList.remove("show")
      else body.classList.add("show")
    })
  })

  return (
    <section
      style={{
        margin: "10% 0"
      }}
    >
      <p className="fw-bolder text-center pb-5 h-auto">
        Şu anda aktif ilan bulunmamaktadır.
      </p>
    </section>
  )
}
export default Career
