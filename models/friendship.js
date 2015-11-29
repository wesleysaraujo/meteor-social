Friendship = new Meteor.Collection('friendships');

Friendship.follow = function(friendId){
	this.insert({
		userId: Meteor.userId(),
		friendId: friendId
	});
}

Friendship.unfollow = function(friendId){
	this.remove({
		userId: Meteor.userId(),
		friendId: friendId
	});
}

Friendship.isFollowing = function(friendId){
	return this.findOne({
		userId: Meteor.userId(),
		friendId: friendId
	});
}

Friendship.followings = function(userId){
	return this.find({userId: userId}).count();
};

Friendship.followers = function(friendId){
	return this.find({friendId: friendId}).count();
}