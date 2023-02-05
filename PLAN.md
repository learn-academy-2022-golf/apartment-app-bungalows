## Team setup
- give group names and assign to the different boards night before

- talk about modifying legacy code like pig latin

- 4 different teams
- PM - Trish and Charlean
- pairs will be given tasks
- not set pairs, dev team, you can swap, you can make your own calls
- members will be given responsibility in ensuring things are done but things happen the team can ensure it gets complete

- inform 4 students to create teams with the room name
- then allow everyone to click link and join respective team
- Each Trello card is crucial to the end goal. If there are any blockers, talk about it.
- If you will be missing a day, talk to your team. 
- always push your work so everyone has access to it

- indentation, if it is not on the trello card/ given back. 
- communication

- Look over Trello
  - Environment Setup (All Team Members in class together) is the start

- cannot review it right away

- $ git checkout main
- $ git pull origin main
- $ git branch -d <stale-branch>
- $ git checkout <new-branch>

- $ git fetch origin <remote-branch>
- $ git checkout <remote-branch>
If you already have the branch on 
- $ git pull origin <remote-branch>


We are adding functionality to this app
- we rarely start from scratch
- code bases are not already started
- we will get to experience a project already running
- look over the documentation
- look over the tasks 

We will assign groups by room name which match the Trello

- share link
- one team member will setup team name, accept the assignment, refresh the screen, click the link
- go over README on github
- have the code open to show info is there

- go back to link or repo, add team members


- everyone will clone the repo after the driver completes initial setup
- cd into repo

- start at GETTING STARTED
  - $ rails db:reset

- START THE APP

- Give tour of the app
react
app/javascript/components/App.js
    - react routers, type in the paths
components - Footer, Header, Navigation
pages - Edit, index, New, Show, Home, NotFound
    start with a test...need to see more than this
    For right now we just want to know our apps work

rails
app/controllers/apartments_controller.rb, home controller

app/models/apartment.rb, user.rb(devise)

app/views/home/index.html.erb - devise user

db/seeds.rb, schema
 - talk about the seeded user

spec/models/apartment_spec.rb
  - models
spec/requests/apartments_spec.rb
  - controllers
app/views/layouts/application.html.erb
    - change title add a favicon

config/routes.rb

type in routes in the url ---> website to see rails routes

- TESTING
 - if there is an error

 ```bash
  /Users/charleanbaxter/.rvm/gems/ruby-3.0.0/gems/rspec-core-3.12.0/lib/rspec/core/reporter.rb:237:in `require': cannot load such file -- rspec/core/profiler (LoadError)
```

 $ bundle exec rspec spec

 https://stackoverflow.com/questions/6588674/what-does-bundle-exec-rake-mean#:~:text=This%20difference%20in%20versions%20can,the%20magic%20of%20shell%20aliases.

You're running bundle exec on a program. The program's wrote it when certain versions of gems were available. The program Gemfile has the script to run correctly against these gem versions.
You systemwide gemfile may have newer or older gems with which this script doesn't play nice. This difference in versions can give you weird errors.

bundle exec helps you avoid these errors. It executes the script using the gems specified in the script's Gemfile rather than the systemwide Gemfile. Magic!!!

$ bundle update

- ADD actions to Trello
    - .DS_Stores to .gitignore
    - path to NotFound.js

NOTE: Trello states there is an error. If one is not available, update trello to say
    - Each member should be able to run rspec spec without errors and see 0 examples, 0 failures.

## validation branch
Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails provides built-in helpers for common needs, and allows you to create your own validation methods as well.
Before saving an Active Record object, Rails runs your validations. If these validations produce any errors, Rails does not save the object.

After Active Record has performed validations, any errors found can be accessed through the errors instance method, which returns a collection of errors. By definition, an object is valid if this collection is empty after running validations.

spec/models

https://github.com/learn-academy-2022-foxtrot/apartment-app-astronaut

let/let!/before memoized helper methods - saving a method's return value so it does not have to be recomputed each time
https://chrisarcand.com/memoized-helpers-and-before-hooks-in-rspec/#:~:text=let%20defines%20a%20memoized%20helper,It's%20not%20cached%20across%20examples.

let(:a_thing) { code_that_creates_a_thing }

  before(:each) do
    a_thing
  end

let!(:a_thing) { code_that_creates_a_thing }

```ruby
  let(:user) { User.create email: "test@example.com", password: "password", password_confirmation: "password" }

  it "should have a valid street" do
    apartment = user.apartments.create(
      city: "Bikini Bottom",
      state: "Pacific Ocean",
      manager: "Mustachio Jones",
      email: "mjones@example.com",
      price: "1000 sand dollars",
      bedrooms: 2,
      bathrooms: 2,
      pets: "yes",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    expect(apartment.errors[:street]).to include "can't be blank"
  end

  it "should have a valid city" do
    apartment = user.apartments.create(
      street: "221B Sandy Street",
      state: "Pacific Ocean",
      manager: "Mustachio Jones",
      email: "mjones@example.com",
      price: "1000 sand dollars",
      bedrooms: 2,
      bathrooms: 2,
      pets: "yes",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    expect(apartment.errors[:city]).to include "can't be blank"
  end

  it "should have a valid state" do
    apartment = user.apartments.create(
      street: "221B Sandy Street",
      city: "Bikini Bottom",
      manager: "Mustachio Jones",
      email: "mjones@example.com",
      price: "1000 sand dollars",
      bedrooms: 2,
      bathrooms: 2,
      pets: "yes",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    expect(apartment.errors[:state]).to include "can't be blank"
  end

  it "should have a valid manager" do
    apartment = user.apartments.create(
      street: "221B Sandy Street",
      city: "Bikini Bottom",
      state: "Pacific Ocean",
      email: "mjones@example.com",
      price: "1000 sand dollars",
      bedrooms: 2,
      bathrooms: 2,
      pets: "yes",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    expect(apartment.errors[:manager]).to include "can't be blank"
  end

  it "should have a valid email" do
    apartment = user.apartments.create(
      street: "221B Sandy Street",
      city: "Bikini Bottom",
      state: "Pacific Ocean",
      manager: "Mustachio Jones",
      price: "1000 sand dollars",
      bedrooms: 2,
      bathrooms: 2,
      pets: "yes",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    expect(apartment.errors[:email]).to include "can't be blank"
  end

  it "should have a valid price" do
    apartment = user.apartments.create(
      street: "221B Sandy Street",
      city: "Bikini Bottom",
      state: "Pacific Ocean",
      manager: "Mustachio Jones",
      email: "mjones@example.com",
      bedrooms: 2,
      bathrooms: 2,
      pets: "yes",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    expect(apartment.errors[:price]).to include "can't be blank"
  end

  it "should have valid bedrooms" do
    apartment = user.apartments.create(
      street: "221B Sandy Street",
      city: "Bikini Bottom",
      state: "Pacific Ocean",
      manager: "Mustachio Jones",
      email: "mjones@example.com",
      price: "1000 sand dollars",
      bathrooms: 2,
      pets: "yes",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    expect(apartment.errors[:bedrooms]).to include "can't be blank"
  end

  it "should have valid bathrooms" do
    apartment = user.apartments.create(
      street: "221B Sandy Street",
      city: "Bikini Bottom",
      state: "Pacific Ocean",
      manager: "Mustachio Jones",
      email: "mjones@example.com",
      price: "1000 sand dollars",
      bedrooms: 2,
      pets: "yes",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    expect(apartment.errors[:bathrooms]).to include "can't be blank"
  end

  it "should have valid pets" do
    apartment = user.apartments.create(
      street: "221B Sandy Street",
      city: "Bikini Bottom",
      state: "Pacific Ocean",
      manager: "Mustachio Jones",
      email: "mjones@example.com",
      price: "1000 sand dollars",
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    expect(apartment.errors[:pets]).to include "can't be blank"
  end

  it "should have a valid image" do
    apartment = Apartment.create(
      street: "221B Sandy Street",
      city: "Bikini Bottom",
      state: "Pacific Ocean",
      manager: "Mustachio Jones",
      email: "mjones@example.com",
      price: "1000 sand dollars",
      bedrooms: 2,
      bathrooms: 2,
      pets: "yes",
      user_id: user.id
    )
    expect(apartment.errors[:image]).to_not be_empty
  end

  it "should have a valid user" do
    apartment = Apartment.create(
      street: "221B Sandy Street",
      city: "Bikini Bottom",
      state: "Pacific Ocean",
      manager: "Mustachio Jones",
      email: "mjones@example.com",
      price: "1000 sand dollars",
      bedrooms: 2,
      bathrooms: 2,
      pets: "yes",
      image: "https://images.thedailystar.net/sites/default/files/styles/very_big_201/public/feature/images/who_lives_in_a_pineapple_under_the_sea.jpg?itok=iYr37hhG"
    )
    p "apartment.errors", apartment.errors[:user]
    expect(apartment.errors[:user]).to include "must exist"
  end
```

app/models/apartment.rb
```ruby
  validates :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image, :user_id, presence: true
```
validation helpers
https://guides.rubyonrails.org/active_record_validations.html#validation-helpers