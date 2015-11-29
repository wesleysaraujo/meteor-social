Template.profileBox.events({
	"click .editar-perfil" : function(e){
		e.preventDefault();
		Session.set('editProfile', true);
	}
});