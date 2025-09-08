document.addEventListener("DOMContentLoaded", function () {
  // 获取所有带有author-link类的链接
  const authorLinks = document.querySelectorAll(".author-link");

  // 为每个链接添加事件监听器
  authorLinks.forEach((link) => {
    const authorName = link.getAttribute("data-author");
    const tooltipId = `tooltip-${authorName}`;

    // 创建tooltip元素
    const tooltip = document.createElement("div");
    tooltip.className = "author-tooltip";
    tooltip.id = tooltipId;
    tooltip.style.display = "none";
    tooltip.style.position = "absolute";
    tooltip.style.zIndex = "1000";
    tooltip.style.backgroundColor = "#fff";
    tooltip.style.border = "1px solid #ddd";
    tooltip.style.borderRadius = "4px";
    tooltip.style.padding = "10px";
    tooltip.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
    tooltip.style.maxWidth = "300px";

    // tooltip将在下面的代码中加载和设置事件

    // 鼠标悬停显示tooltip
    link.addEventListener("mouseenter", function (e) {
      const tooltip = document.getElementById(tooltipId);
      if (tooltip) {
        // 计算位置，显示在链接下方
        const rect = link.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom + 5}px`;
        tooltip.style.display = "block";
      }
    });

    // 鼠标离开链接时，检查是否移到了tooltip上
    link.addEventListener("mouseleave", function () {
      const tooltip = document.getElementById(tooltipId);
      if (tooltip) {
        // 添加一个标记，表示鼠标已离开链接
        link.dataset.mouseLeft = "true";

        // 使用setTimeout延迟隐藏，给鼠标移动到tooltip的时间
        setTimeout(() => {
          // 如果鼠标没有移到tooltip上，则隐藏tooltip
          if (link.dataset.mouseLeft === "true" && tooltip.dataset.mouseEntered !== "true") {
            tooltip.style.display = "none";
          }
        }, 100);
      }
    });

    // 当tooltip创建后，为其添加鼠标进入和离开事件
    const setupTooltipEvents = (tooltip) => {
      // 鼠标进入tooltip
      tooltip.addEventListener("mouseenter", function () {
        tooltip.dataset.mouseEntered = "true";
      });

      // 鼠标离开tooltip
      tooltip.addEventListener("mouseleave", function () {
        tooltip.dataset.mouseEntered = "false";
        tooltip.style.display = "none";
        link.dataset.mouseLeft = "false";
      });
    };

    // 在tooltip加载完成后设置事件
    fetch(`/assets/author_info/${authorName}.html`)
      .then((response) => response.text())
      .then((html) => {
        tooltip.innerHTML = html;
        document.body.appendChild(tooltip);
        setupTooltipEvents(tooltip);
      })
      .catch((error) => {
        console.error("加载作者信息失败:", error);
      });
  });
});
