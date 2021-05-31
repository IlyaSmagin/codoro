import { useEffect, useState } from "react";

function useDocTitle(title) {
  const [docTitle, setDocTitle] = useState(title);
  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return setDocTitle;
}

export default useDocTitle;
