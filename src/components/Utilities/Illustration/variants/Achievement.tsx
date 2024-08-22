import * as React from 'react';

function Achievement({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 50 50">
      <path
        fill="#63BCE7"
        d="M31.742 25.861c0 .018.005.035.005.053v3.677a.98.98 0 0 1-.977.976h5.276V27.752l-4.304-1.89ZM18.928 29.59v-3.677c0-.018.005-.036.006-.055l-.006-.023-4.363 1.917v2.815h5.34a.98.98 0 0 1-.977-.976Z"
      />
      <path fill="#6377E7" d="M14.565 27.752v2.815h1.553V27.07l-1.553.682Z" />
      <path fill="#63E2E7" d="M36.046 27.752v2.815h-1.553V27.07l1.553.682Z" />
      <path
        fill="#F46275"
        d="M24.1 33.462c-.15 0-.295-.015-.438-.038l-.052.038s.281.39 1.728 2.546c1.446-2.156 1.728-2.546 1.728-2.546l-.052-.038a2.723 2.723 0 0 1-.438.038H24.1Z"
      />
      <path
        fill="#F43075"
        d="M24.1 33.462c-.15 0-.295-.015-.438-.038l-.052.038s.281.39 1.728 2.546c.31-.463.564-.84.776-1.154-.775-1.147-.951-1.392-.951-1.392H24.1Z"
      />
      <path
        fill="#63BCE7"
        d="M23.662 33.424c.143.023.289.038.438.038h2.476c.149 0 .294-.015.437-.038a2.704 2.704 0 0 0 1.597-.883c.423-.479.681-1.106.681-1.794 0-.06-.005-.12-.009-.18h-7.889c-.004.06-.009.12-.009.18a2.715 2.715 0 0 0 2.278 2.677Z"
      />
      <path
        fill="#6377E7"
        d="M23.233 31.975a2.7 2.7 0 0 1-.296-1.228c0-.06.005-.12.01-.18h-1.553c-.004.06-.01.12-.01.18a2.715 2.715 0 0 0 2.278 2.677c.143.023.289.038.438.038h1.552c-.149 0-.294-.015-.437-.038a2.714 2.714 0 0 1-1.982-1.449Z"
      />
      <path
        fill="#F46275"
        d="M29.916 24.038v-.958c0-.66-.539-1.198-1.198-1.198h-.579c-.659 0-1.198-.454-1.198-1.008 0-.038-.008-.074-.013-.11h.013c2.519-.585 3.829-2.22 4.504-3.624.594-1.233.696-2.286.696-2.286l.136-1.118.752-6.212.261-2.156H17.385l.261 2.156.753 6.218.135 1.112s.103 1.053.696 2.286c.675 1.403 1.985 3.04 4.504 3.624h.013c-.005.036-.013.072-.013.11 0 .554-.54 1.008-1.198 1.008h-.579c-.659 0-1.198.539-1.198 1.198v.958c0 .358.16.679.41.899h8.337c.25-.22.41-.541.41-.899Zm-3.734-9.15c-.464-.243-1.224-.243-1.688 0-.465.245-.772.021-.683-.496.088-.517-.147-1.24-.522-1.605-.376-.367-.258-.728.26-.803.52-.075 1.134-.522 1.366-.993.233-.47.612-.47.845 0 .232.47.846.918 1.365.993.52.075.637.437.26.803-.375.366-.61 1.088-.52 1.605.088.517-.219.74-.683.496Z"
      />
      <path
        fill="#F43075"
        d="M22.313 24.038v-.958c0-.66.54-1.198 1.198-1.198h.579c.659 0 1.198-.454 1.198-1.008 0-.038.008-.074.013-.11h-.013c-2.519-.584-3.83-2.22-4.504-3.624-.594-1.233-.696-2.286-.696-2.286l-.135-1.111-.753-6.219-.261-2.156H17.385l.261 2.156.754 6.219.134 1.111s.103 1.053.696 2.286c.675 1.403 1.986 3.04 4.504 3.624h.013c-.005.037-.013.072-.013.11 0 .554-.539 1.008-1.198 1.008h-.578c-.66 0-1.199.539-1.199 1.198v.958c0 .358.16.68.41.9h1.554c-.25-.221-.41-.542-.41-.9Z"
      />
      <path
        fill="#F8AF23"
        d="M41.57 38.595c-1.801-1.812-3.916-1.68-3.916-1.68C37.208 33.98 35 33.043 35 33.043c-3.146-1.504-5.34.526-5.34.526-.53-.38-.853-.743-1.05-1.027-.406.46-.965.78-1.598.883l.053.038s-.282.39-1.728 2.545c-1.447-2.155-1.729-2.545-1.729-2.545l.053-.038a2.715 2.715 0 0 1-1.982-1.449h-.002s-.178.76-1.34 1.593c0 0-2.193-2.03-5.34-.526 0 0-2.207.937-2.652 3.874 0 0-2.115-.133-3.917 1.678 0 0-1.51 1.47-1.495 3.734H43.066c.014-2.264-1.495-3.733-1.495-3.733Z"
      />
      <path
        fill="#F8D323"
        d="M41.57 38.595c-1.801-1.812-3.916-1.679-3.916-1.679C37.208 33.979 35 33.043 35 33.043c-1.192-.57-2.248-.632-3.099-.49.48.078.994.23 1.537.49 0 0 2.207.936 2.652 3.873 0 0 2.115-.133 3.917 1.679 0 0 1.51 1.47 1.495 3.733h1.563c.014-2.264-1.495-3.733-1.495-3.733Z"
      />
      <path
        fill="#F87023"
        d="M13.899 36.916c.445-2.937 2.652-3.873 2.652-3.873a5.644 5.644 0 0 1 1.542-.491c-.85-.142-1.904-.079-3.095.49 0 0-2.207.937-2.652 3.874 0 0-2.115-.133-3.917 1.679 0 0-1.51 1.47-1.495 3.733h1.553c-.014-2.264 1.495-3.733 1.495-3.733 1.802-1.812 3.917-1.679 3.917-1.679Z"
      />
      <path
        fill="#6377E7"
        d="m18.4 13.742-2.331-6.218h1.577l-.261-2.156H15.71c-.672 0-1.258.289-1.608.793-.35.504-.415 1.155-.178 1.785l2.765 7.376c.379 1.012 1.46 1.779 2.541 1.818-.593-1.233-.696-2.286-.696-2.286l-.134-1.112Z"
      />
      <path
        fill="#63BCE7"
        d="m34.605 7.524-2.328 6.212-.135 1.118s-.103 1.053-.696 2.286c1.08-.04 2.16-.807 2.54-1.818l2.765-7.376c.236-.63.17-1.28-.179-1.785-.35-.504-.936-.793-1.608-.793H33.29l-.261 2.156h1.575Z"
      />
      <path
        fill="#F8AF23"
        d="M31.747 29.086v-3.172c0-.019-.004-.035-.005-.053a.977.977 0 0 0-.972-.924H19.905a.977.977 0 0 0-.971.921c-.001.02-.006.037-.006.055v3.678c0 .537.44.976.977.976H30.77a.98.98 0 0 0 .977-.976v-.505Z"
      />
      <path
        fill="#F87023"
        d="M20.48 29.59v-3.677c0-.018.005-.036.006-.055a.977.977 0 0 1 .971-.921h-1.552a.977.977 0 0 0-.971.921c-.001.02-.006.037-.006.055v3.678c0 .537.44.976.977.976h1.552a.98.98 0 0 1-.976-.976Z"
      />
      <path
        fill="#F8D323"
        d="M31.747 29.59v-3.676c0-.019-.004-.035-.005-.053a.977.977 0 0 0-.972-.924h-1.552a.98.98 0 0 1 .976.976v3.678c0 .019-.004.036-.005.055a.977.977 0 0 1-.971.921h1.552a.98.98 0 0 0 .977-.976Z"
      />
      <path
        fill="#F8AF23"
        d="M27.386 12.787c.376-.367.26-.728-.26-.803-.52-.075-1.134-.522-1.366-.993-.233-.47-.612-.47-.845 0-.232.47-.846.918-1.365.993-.519.075-.637.436-.26.803.375.366.61 1.088.521 1.605-.088.517.219.74.683.496.464-.243 1.224-.243 1.688 0 .464.245.771.021.683-.496-.089-.517.146-1.24.521-1.605Z"
      />
      <path
        fill="#231F20"
        d="M27.066 23.843h1.319a.293.293 0 1 0 0-.586h-1.319a.293.293 0 1 0 0 .585ZM26.902 15.163c.13-.094.336-.326.252-.82-.072-.42.132-1.05.436-1.346.36-.35.33-.659.28-.811-.05-.153-.207-.42-.703-.492-.421-.061-.956-.45-1.144-.833-.223-.449-.525-.516-.686-.516-.16 0-.462.067-.685.516-.188.383-.723.772-1.144.833-.496.072-.653.34-.703.492-.05.153-.08.461.28.81.304.298.509.928.437 1.347-.085.494.12.726.25.82.076.055.202.119.38.119.13 0 .29-.035.478-.134.377-.198 1.038-.198 1.415 0 .443.233.727.11.857.015Zm-2.545-.534c-.142.075-.225.07-.24.06-.014-.01-.045-.088-.017-.247.104-.612-.162-1.431-.607-1.865-.115-.113-.136-.194-.13-.21.005-.017.07-.07.229-.093.614-.09 1.311-.596 1.586-1.153.071-.145.142-.19.16-.19.017 0 .087.045.159.19.275.557.971 1.064 1.586 1.153.16.023.224.076.23.093.005.016-.016.097-.132.21-.444.434-.71 1.253-.605 1.865.027.159-.004.236-.018.247-.014.01-.098.015-.24-.06-.55-.29-1.411-.289-1.96 0ZM27.066 7.817h1.319a.293.293 0 1 0 0-.586h-1.319a.293.293 0 0 0 0 .586Z"
      />
      <path
        fill="#231F20"
        d="M44.148 42.035h-.8c-.106-2.19-1.51-3.59-1.57-3.647-1.515-1.523-3.228-1.74-3.877-1.765-.546-2.868-2.691-3.81-2.774-3.845-2.748-1.314-4.844-.044-5.471.42a4.072 4.072 0 0 1-.674-.652c.366-.49.574-1.076.597-1.686h6.466a.293.293 0 0 0 .293-.293v-2.815a.293.293 0 0 0-.175-.268l-4.154-1.826a1.266 1.266 0 0 0-1.239-1.015h-.692c.085-.188.131-.394.131-.605v-.959c0-.822-.669-1.49-1.491-1.49h-.579c-.44 0-.82-.265-.892-.6 2.43-.645 3.718-2.256 4.386-3.57 1.142-.117 2.228-.931 2.626-1.995l2.766-7.375c.27-.721.193-1.47-.212-2.055-.405-.584-1.079-.92-1.85-.92H15.71c-.77 0-1.444.336-1.849.92-.405.584-.482 1.333-.212 2.055l2.766 7.375c.398 1.065 1.485 1.88 2.628 1.995.668 1.315 1.956 2.926 4.386 3.57-.073.335-.452.6-.892.6h-.58c-.821 0-1.49.669-1.49 1.49v.959c0 .21.045.417.13.606h-.692c-.597 0-1.101.417-1.232.983l-4.226 1.857a.293.293 0 0 0-.175.268v2.815c0 .162.131.293.293.293H21.098c.015.39.105.768.267 1.125-.075.185-.323.668-1.02 1.212a5.067 5.067 0 0 0-1.403-.733c-.91-.309-2.355-.505-4.058.309-.094.04-2.24.981-2.785 3.85-.65.024-2.362.241-3.875 1.762-.062.06-1.466 1.46-1.573 3.65h-.8a.293.293 0 0 0 0 .586h38.297a.293.293 0 0 0 0-.586ZM32.04 26.313l3.713 1.63v.85H32.04v-2.48Zm0 3.278v-.212h3.713v.895h-3.915c.127-.197.202-.431.202-.683Zm-17.182-1.648 3.777-1.659v2.509h-3.777v-.85Zm0 2.331v-.895h3.777v.212c0 .252.075.486.202.683h-3.98Zm13.533 2.073a2.42 2.42 0 0 1-1.425.788 2.407 2.407 0 0 1-.39.035h-2.477c-.118 0-.246-.012-.39-.035a2.428 2.428 0 0 1-1.768-1.292 2.392 2.392 0 0 1-.257-.983h7.31a2.418 2.418 0 0 1-.603 1.487Zm-1.885 1.408c-.221.325-.585.859-1.168 1.727-.584-.868-.947-1.403-1.17-1.727h2.338ZM33.55 5.661h1.414c.575 0 1.074.243 1.367.667.294.424.347.977.145 1.516l-2.765 7.375c-.277.74-.997 1.345-1.783 1.552.417-1.038.501-1.849.504-1.882l.132-1.084 2.315-6.178a.293.293 0 0 0-.274-.396H33.36l.19-1.57Zm.633 2.156-1.32 3.522.426-3.522h.893Zm-16.796 0 .427 3.529-1.323-3.529h.896Zm-.424 7.402-2.765-7.376c-.202-.539-.15-1.091.144-1.515.294-.424.793-.667 1.368-.667h1.415l.19 1.57H16.07a.292.292 0 0 0-.274.396l2.318 6.185.13 1.07c.003.04.087.85.505 1.89-.787-.207-1.507-.813-1.785-1.553Zm4.09 8.624h4.285a.293.293 0 0 0 0-.586h-4.286v-.177c0-.499.407-.905.906-.905h.578c.822 0 1.491-.584 1.491-1.3 0-.011.003-.021.005-.032l.006-.04a.303.303 0 0 0-.247-.327c-2.45-.571-3.689-2.198-4.297-3.463-.561-1.167-.667-2.178-.67-2.194l-.847-7.002h7.36a.293.293 0 1 0 0-.586h-7.431l-.19-1.57H32.96l-1.11 9.165c-.001.01-.104 1.014-.669 2.187-.607 1.261-1.842 2.883-4.278 3.459a.293.293 0 0 0-.266.33l.007.043c.002.01.004.02.004.029 0 .717.669 1.301 1.491 1.301h.579c.5 0 .905.406.905.905v.958c0 .224-.085.44-.236.606h-8.098a.902.902 0 0 1-.237-.606v-.195Zm-1.148 6.431a.684.684 0 0 1-.684-.683v-1.546h6.117a.293.293 0 0 0 0-.586H19.22v-1.536a.536.536 0 0 0 .005-.048.682.682 0 0 1 .679-.645H30.77c.361 0 .66.284.68.647a.164.164 0 0 0 .004.036v3.678a.684.684 0 0 1-.684.683H19.905ZM7.235 42.035c.107-1.942 1.385-3.218 1.402-3.234 1.62-1.628 3.528-1.597 3.68-1.593l.02.002c.012 0 1.262-.034 2.411.615a.292.292 0 0 0 .4-.11c.079-.141.03-.32-.111-.4-.9-.508-1.832-.645-2.338-.68.515-2.47 2.335-3.288 2.426-3.328 2.276-1.088 3.999-.238 4.688.227-.27.137-.664.301-1.095.36a.293.293 0 1 0 .078.58c.92-.124 1.677-.643 1.709-.665l.002-.002h.002c.64-.46 1.005-.906 1.209-1.236a3.019 3.019 0 0 0 1.677 1.095c.09.127.483.691 1.7 2.505a.293.293 0 0 0 .486 0 162.262 162.262 0 0 1 1.698-2.503 3.017 3.017 0 0 0 1.303-.687c.244.29.547.566.907.823l.005.005c.032.022.788.54 1.709.665a.293.293 0 1 0 .078-.581 3.539 3.539 0 0 1-1.09-.358c.695-.459 2.434-1.304 4.696-.223.02.008 1.898.834 2.418 3.323-.509.037-1.434.175-2.326.68a.293.293 0 1 0 .288.51c1.15-.65 2.399-.616 2.41-.616l.032-.002c.275-.005 2.09.022 3.657 1.597.014.013 1.292 1.28 1.4 3.23H7.234v.001ZM4.268 42.035h-1.63a.293.293 0 1 0 0 .586h1.63a.293.293 0 0 0 0-.586ZM47.362 42.035h-1.63a.293.293 0 1 0 0 .586h1.63a.293.293 0 0 0 0-.586ZM39.312 44.34H10.264a.293.293 0 0 0 0 .585h29.048a.293.293 0 1 0 0-.586ZM8.504 44.34h-1.63a.293.293 0 0 0 0 .585h1.63a.293.293 0 1 0 0-.586ZM42.741 44.34h-1.63a.293.293 0 0 0 0 .585h1.63a.293.293 0 1 0 0-.586Z"
      />
      <path
        fill="#231F20"
        d="M23.609 35.531a.293.293 0 0 0-.293.293v1.787a.293.293 0 1 0 .586 0v-1.787a.293.293 0 0 0-.293-.293ZM27.065 35.531a.293.293 0 0 0-.293.293v1.787a.293.293 0 0 0 .586 0v-1.787a.293.293 0 0 0-.293-.293ZM23.609 38.417a.293.293 0 0 0-.293.293v.868a.293.293 0 1 0 .586 0v-.868a.293.293 0 0 0-.293-.293ZM27.065 38.417a.293.293 0 0 0-.293.293v.868a.293.293 0 0 0 .586 0v-.868a.293.293 0 0 0-.293-.293ZM25.337 37.094a.293.293 0 0 0-.293.293v1.787a.293.293 0 1 0 .586 0v-1.787a.293.293 0 0 0-.293-.293ZM25.337 39.98a.293.293 0 0 0-.293.292v.868a.293.293 0 1 0 .586 0v-.868a.293.293 0 0 0-.293-.293ZM28.385 27.46h-1.319a.293.293 0 0 0 0 .585h1.319a.293.293 0 1 0 0-.586Z"
      />
    </svg>
  );
}

export default Achievement;
