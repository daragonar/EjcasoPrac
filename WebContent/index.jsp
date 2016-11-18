<jsp:include page="pages/header.jsp"/>

<%
String pag="";
if(request.getAttribute("page")!=null)
{
	pag= request.getAttribute("page").toString();
}
switch (pag) {
default:
	pag= new String("pages/home.jsp");
	break;
}
%>
<jsp:include page="<%= pag %>" />
<jsp:include page="pages/footer.jsp"/>